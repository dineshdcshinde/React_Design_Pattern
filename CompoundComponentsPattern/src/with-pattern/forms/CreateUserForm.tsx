import React from "react";

export const CreateUserForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
    };

    console.log("Create User Payload:", payload);
  };

  return (
    <form id="user-create-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Name</label>
        <input name="name" placeholder="Enter full name" required />
      </div>

      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          required
        />
      </div>

      <div className="form-field">
        <label>Role</label>
        <select name="role" defaultValue="user">
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
    </form>
  );
};
