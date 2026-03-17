export default function SingleProfile({ src, name, text = "", initials = "" }) {
  return (
    <div className="profile-row">
      {src ? (
        <img
          tabIndex={0}
          className="profile-avatar peer"
          src={src}
          alt={name}
        />
      ) : (
        <div
          tabIndex={0}
          className="profile-avatar peer bg-gray-900 flex items-center justify-center rounded-full"
        >
          <span className="text-white font-bold text-sm">{initials}</span>
        </div>
      )}
      <span className="profile-tooltip-peer">{name}</span>
      <p className="mt-2 text-sm text-muted font-sans hover:border-b">{text}</p>
    </div>
  );
}
