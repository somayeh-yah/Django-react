export const filterOptions = [
  {
    key: "level",
    label: "Level",
    icon: "fas fa-signal",
    options: [
      { value: "Beginner", label: "Beginner" },
      { value: "Intermediate", label: "Intermediate" },
      { value: "Advanced", label: "Advanced" },
    ],
  },
  {
    key: "price",
    label: "Price",
    icon: "fas fa-tag",
    options: [
      { value: "free", label: "Free" },
      { value: "paid", label: "Paid" },
    ],
  },
  {
    key: "rating",
    label: "Rating",
    icon: "fas fa-star",
    options: [
      { value: "4", label: "4★ & up" },
      { value: "3", label: "3★ & up" },
      { value: "2", label: "2★ & up" },
    ],
  },
  {
    key: "category",
    label: "Category",
    icon: "fas fa-folder",
    options: [
      { value: "development", label: "Development" },
      { value: "design", label: "Design" },
      { value: "business", label: "Business" },
      { value: "marketing", label: "Marketing" },
    ],
  },
];
