import { create } from "zustand";
import axiosInstance from "../utils/useAxios";

const useSearchStore = create((set, get) => ({
  // ── STATE ──
  query: "",
  results: {
    courses: [],
    tasks: [],
    teams: [],
    users: [],
  },
  loading: false,
  error: null,
  isOpen: false,

  // Filtrering
  filters: {
    category: null,
    level: null,
    price: null,
    rating: null,
  },

  // Sortering
  sortBy: "relevance",

  // ── ACTIONS ──
  setQuery: (query) => set({ query, isOpen: query.length > 0 }),

  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),

  clearFilters: () =>
    set({
      filters: { category: null, level: null, price: null, rating: null },
    }),

  setSortBy: (sortBy) => set({ sortBy }),

  setIsOpen: (isOpen) => set({ isOpen }),

  // Söker på alla typer parallellt
  search: async () => {
    const { query, filters, sortBy } = get();
    if (!query.trim()) return;

    set({ loading: true, error: null });

    try {
      const params = new URLSearchParams();
      params.append("search", query);
      if (filters.category) params.append("category", filters.category);
      if (filters.level) params.append("level", filters.level);
      if (filters.price) params.append("price", filters.price);
      if (filters.rating) params.append("rating", filters.rating);
      params.append("ordering", sortBy);

      // Hämta alla typer parallellt
      const [courses, tasks, teams, users] = await Promise.allSettled([
        axiosInstance.get(`courses/?${params.toString()}`),
        axiosInstance.get(`tasks/?search=${query}`),
        axiosInstance.get(`teams/?search=${query}`),
        axiosInstance.get(`users/?search=${query}`),
      ]);

      set({
        results: {
          courses: courses.status === "fulfilled" ? courses.value.data : [],
          tasks: tasks.status === "fulfilled" ? tasks.value.data : [],
          teams: teams.status === "fulfilled" ? teams.value.data : [],
          users: users.status === "fulfilled" ? users.value.data : [],
        },
        loading: false,
        isOpen: true,
      });
    } catch (err) {
      set({ error: "Something went wrong", loading: false });
    }
  },

  clearSearch: () =>
    set({
      query: "",
      results: { courses: [], tasks: [], teams: [], users: [] },
      error: null,
      isOpen: false,
      filters: { category: null, level: null, price: null, rating: null },
      sortBy: "relevance",
    }),
}));

// ── SELECTORS ──
export const useQuery = () => useSearchStore((state) => state.query);
export const useResults = () => useSearchStore((state) => state.results);
export const useSearchLoading = () => useSearchStore((state) => state.loading);
export const useSearchError = () => useSearchStore((state) => state.error);
export const useSearchIsOpen = () => useSearchStore((state) => state.isOpen);
export const useFilters = () => useSearchStore((state) => state.filters);
export const useSortBy = () => useSearchStore((state) => state.sortBy);

export const useSearchActions = () =>
  useSearchStore((state) => ({
    setQuery: state.setQuery,
    setFilter: state.setFilter,
    clearFilters: state.clearFilters,
    setSortBy: state.setSortBy,
    setIsOpen: state.setIsOpen,
    search: state.search,
    clearSearch: state.clearSearch,
  }));

export default useSearchStore;
