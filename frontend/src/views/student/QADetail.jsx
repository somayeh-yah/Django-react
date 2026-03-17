import { useState } from "react";

const messages = [
  {
    id: 1,
    name: "Jenny Adga",
    time: "5hrs Ago",
    text: "Removed demands expense account",
    img: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-2.jpg",
  },
  {
    id: 2,
    name: "Sam Freddy",
    time: "5hrs Ago",
    text: "Removed demands expense account from the debby building in a hall town tak with",
    img: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg",
  },
  {
    id: 3,
    name: "Louis Ferguson",
    time: "5hrs Ago",
    text: "Removed demands expense account",
    img: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg",
  },
];

function QADetail() {
  const [message, setMessage] = useState("");

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4 text-body">
            <i className="fas fa-envelope mr-2" /> Q/A - Angular Masterclass
            Course
          </h4>

          <div className="card mb-4">
            <div className="p-5 border-b border-br">
              <p className="text-sm text-body">
                Course: <strong>Angular Masterclass Course</strong>
              </p>
              <p className="text-sm text-muted mt-1">
                Questions: <strong>16</strong>
              </p>
            </div>

            <div className="p-5">
              {/* Messages */}
              <ul className="space-y-4 overflow-y-auto h-[500px] no-scrollbar mb-4">
                {messages.map((msg) => (
                  <li key={msg.id} className="flex gap-3">
                    <img
                      src={msg.img}
                      alt={msg.name}
                      className="profile-avatar w-10 h-10 flex-shrink-0"
                    />
                    <div className="bg-surface border border-br rounded-xl p-3 flex-1">
                      <p className="text-sm font-semibold text-body">
                        {msg.name}
                      </p>
                      <p className="text-xs text-muted mb-1">{msg.time}</p>
                      <p className="text-sm text-body">{msg.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Reply form */}
              <div className="flex gap-2 mt-4">
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message..."
                  className="search-input pl-4 flex-1 rounded-xl resize-none"
                />
                <button type="button" className="btn-primary self-end">
                  Post <i className="fas fa-paper-plane" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QADetail;
