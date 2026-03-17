function Header() {
  return (
    <div className="bg-surface px-4 pt-2 pb-4 shadow-sm rounded-xl mb-6">
      <div className="flex items-end justify-between">
        <div className="flex items-center">
          <div className="mr-2 relative flex justify-end items-end -mt-10">
            <img
              src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
              alt="avatar"
            />
          </div>
          <div className="leading-none">
            <h2 className="text-xl font-bold text-body mb-0">Destiny Franks</h2>
            <p className="text-sm text-muted mb-0">@desphixs</p>
          </div>
        </div>
        <div className="hidden md:flex gap-2">
          <a
            href="#"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors"
          >
            Create New Course <i className="fas fa-plus" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            Setting <i className="fas fa-gear" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Contact Support <i className="fas fa-phone" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;