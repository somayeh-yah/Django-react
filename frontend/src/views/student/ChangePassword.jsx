function ChangePassword() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="card">
            <div className="p-5 border-b border-br">
              <h3 className="text-lg font-semibold text-body">
                Change Password
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label
                  htmlFor="old-password"
                  className="block text-sm font-medium text-body mb-1"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  id="old-password"
                  className="search-input pl-4"
                  placeholder="**************"
                />
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-body mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="search-input pl-4"
                  placeholder="**************"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-body mb-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="search-input pl-4"
                  placeholder="**************"
                />
              </div>
              <div className="pt-2">
                <button type="submit" className="btn-primary">
                  Save New Password <i className="fas fa-check-circle" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
