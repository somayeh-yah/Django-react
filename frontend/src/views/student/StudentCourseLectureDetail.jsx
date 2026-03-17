import { useState } from "react";
import ReactPlayer from "react-player";

const TABS = ["Course Lectures", "Notes", "Discussion", "Leave a Review"];

const allSections = [
  {
    id: "s1",
    title: "Introduction of Digital Marketing",
    count: 3,
    lectures: [
      { id: 1, title: "Introduction", duration: "2m 10s", locked: false },
      {
        id: 2,
        title: "What is Digital Marketing",
        duration: "15m 10s",
        locked: false,
      },
      {
        id: 3,
        title: "Type of Digital Marketing",
        duration: "18m 10s",
        locked: true,
      },
    ],
  },
  {
    id: "s2",
    title: "Customer Life cycle",
    count: 4,
    lectures: [
      {
        id: 4,
        title: "What is Digital Marketing",
        duration: "11m 20s",
        locked: false,
      },
      {
        id: 5,
        title: "15 Tips for Writing Magnetic Headlines",
        duration: "25m 20s",
        locked: false,
      },
      {
        id: 6,
        title: "How to Write Like Your Customers Talk",
        duration: "11m 30s",
        locked: false,
      },
      {
        id: 7,
        title: "How to Flip Features Into Benefits",
        duration: "35m 30s",
        locked: true,
      },
    ],
  },
  {
    id: "s3",
    title: "What is Search Engine Optimization (SEO)",
    count: 10,
    lectures: [
      { id: 8, title: "Introduction", duration: "1m 10s", locked: false },
      { id: 9, title: "Overview of SEO", duration: "11m 03s", locked: false },
      {
        id: 10,
        title: "How to SEO Optimise Your Homepage",
        duration: "15m 00s",
        locked: false,
      },
      {
        id: 11,
        title: "SEO Keyword Planning",
        duration: "18m 10s",
        locked: true,
      },
      { id: 12, title: "eCommerce SEO", duration: "28m 10s", locked: true },
    ],
  },
];

const notes = [
  {
    id: 1,
    title: "What is Digital Marketing",
    content: "Arranging rapturous did believe him all had supported.",
  },
];

const questions = [
  {
    id: 1,
    author: "Angelina Poi",
    time: "10 Hours ago",
    img: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg",
    question: "How can i fix this bug?",
  },
  {
    id: 2,
    author: "Sam Freddy",
    time: "10 Hours ago",
    img: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-2.jpg",
    question: "What is the best approach here?",
  },
];

function StudentCourseLectureDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const [openSections, setOpenSections] = useState(new Set(["s1"]));
  const [editNote, setEditNote] = useState(null);
  const [activeConvo, setActiveConvo] = useState(null);
  const [rating, setRating] = useState(5);

  const toggleSection = (id) => {
    const next = new Set(openSections);
    next.has(id) ? next.delete(id) : next.add(id);
    setOpenSections(next);
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex-1">
          {/* Video player */}
          <div className="rounded-xl overflow-hidden mb-6 shadow-md">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              width="100%"
              height={480}
              controls
            />
          </div>

          <div className="card overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-br px-4 pt-3 pb-0 flex gap-6 overflow-x-auto no-scrollbar">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === i
                      ? "border-primary text-primary"
                      : "border-transparent text-muted hover:text-body"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-5">
              {/* TAB 1 — Course Lectures */}
              {activeTab === 0 && (
                <div className="space-y-3">
                  {allSections.map((section) => (
                    <div
                      key={section.id}
                      className="border border-br rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex justify-between items-center px-4 py-3 bg-surface hover:bg-primary-soft transition-colors text-left"
                      >
                        <span className="font-semibold text-body text-sm">
                          {section.title}{" "}
                          <span className="text-muted font-normal">
                            ({section.count} Lectures)
                          </span>
                        </span>
                        <i
                          className={`fas fa-chevron-down text-muted transition-transform ${openSections.has(section.id) ? "rotate-180" : ""}`}
                        />
                      </button>

                      {openSections.has(section.id) && (
                        <div className="divide-y divide-br">
                          {section.lectures.map((lec) => (
                            <div
                              key={lec.id}
                              className="flex justify-between items-center px-4 py-3 hover:bg-surface transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                                    lec.locked
                                      ? "bg-surface text-muted"
                                      : "bg-error/10 text-error"
                                  }`}
                                >
                                  <i
                                    className={`fas ${lec.locked ? "fa-lock" : "fa-play"}`}
                                  />
                                </span>
                                <span
                                  className={`text-sm truncate max-w-xs ${lec.locked ? "text-muted" : "text-body"}`}
                                >
                                  {lec.title}
                                </span>
                                {lec.locked && (
                                  <span className="text-xs px-2 py-0.5 bg-warning/20 text-warning rounded-full">
                                    Premium
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-muted ml-4 shrink-0">
                                {lec.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2 — Notes */}
              {activeTab === 1 && (
                <div>
                  <h4 className="font-semibold text-body mb-4">All Notes</h4>
                  <div className="space-y-4">
                    {notes.map((note) => (
                      <div key={note.id} className="card p-4 space-y-2">
                        <h5 className="font-semibold text-body">
                          {note.title}
                        </h5>
                        <p className="text-sm text-muted">{note.content}</p>
                        <div className="flex gap-2 pt-1">
                          <button
                            onClick={() => setEditNote(note)}
                            className="btn-primary text-xs py-1.5 px-3"
                          >
                            <i className="bi bi-pencil-square mr-1" /> Edit
                          </button>
                          <button className="px-3 py-1.5 rounded-lg text-xs bg-error/10 text-error hover:bg-error/20 transition-colors">
                            <i className="bi bi-trash mr-1" /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3 — Discussion */}
              {activeTab === 2 && (
                <div>
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <input
                      type="search"
                      placeholder="Search"
                      className="search-input pl-4 flex-1"
                    />
                    <button className="btn-primary">Ask Question</button>
                  </div>
                  <div className="space-y-4">
                    {questions.map((q) => (
                      <div key={q.id} className="card p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={q.img}
                            alt={q.author}
                            className="profile-avatar w-10 h-10"
                          />
                          <div>
                            <p className="text-sm font-semibold text-body">
                              {q.author}
                            </p>
                            <p className="text-xs text-muted">Asked {q.time}</p>
                          </div>
                        </div>
                        <h5 className="font-semibold text-body mb-2">
                          {q.question}
                        </h5>
                        <button
                          onClick={() => setActiveConvo(q)}
                          className="btn-primary text-xs py-1.5 px-3"
                        >
                          Join Conversation{" "}
                          <i className="fas fa-arrow-right ml-1" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4 — Leave a Review */}
              {activeTab === 3 && (
                <div className="max-w-lg space-y-4">
                  <h4 className="font-semibold text-body">Leave a Review</h4>
                  <div>
                    <label className="block text-sm font-medium text-body mb-1">
                      Rating
                    </label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="search-input pl-4"
                    >
                      <option value={5}>★★★★★ (5/5)</option>
                      <option value={4}>★★★★☆ (4/5)</option>
                      <option value={3}>★★★☆☆ (3/5)</option>
                      <option value={2}>★★☆☆☆ (2/5)</option>
                      <option value={1}>★☆☆☆☆ (1/5)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-body mb-1">
                      Your review
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your review..."
                      className="search-input pl-4 rounded-xl resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    Post Review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Note modal */}
      {editNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="card w-full max-w-lg mx-4 p-5 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-body">Edit Note</h3>
              <button
                onClick={() => setEditNote(null)}
                className="text-muted hover:text-body"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-body mb-1">
                Note Title
              </label>
              <input
                type="text"
                defaultValue={editNote.title}
                className="search-input pl-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-body mb-1">
                Note Content
              </label>
              <textarea
                rows={6}
                defaultValue={editNote.content}
                className="search-input pl-4 rounded-xl resize-none"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditNote(null)} className="button">
                <i className="fas fa-arrow-left mr-1" /> Close
              </button>
              <button type="submit" className="btn-primary">
                Save Note <i className="fas fa-check-circle ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conversation modal */}
      {activeConvo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="card w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center p-4 border-b border-br">
              <h3 className="font-semibold text-body">
                {activeConvo.question}
              </h3>
              <button
                onClick={() => setActiveConvo(null)}
                className="text-muted hover:text-body"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="p-4">
              <ul className="space-y-4 overflow-y-auto h-80 no-scrollbar mb-4">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex gap-3">
                    <img
                      src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
                      alt="avatar"
                      className="profile-avatar w-9 h-9 flex-shrink-0"
                    />
                    <div className="bg-surface border border-br rounded-xl p-3 flex-1">
                      <p className="text-sm font-semibold text-body">
                        Louis Ferguson
                      </p>
                      <p className="text-xs text-muted mb-1">5hrs Ago</p>
                      <p className="text-sm text-body">
                        Removed demands expense account
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <textarea
                  rows={2}
                  placeholder="What's your question?"
                  className="search-input pl-4 flex-1 rounded-xl resize-none"
                />
                <button type="button" className="btn-primary self-end">
                  Post <i className="fas fa-paper-plane ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default StudentCourseLectureDetail;
