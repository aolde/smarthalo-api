db.createUser(
  {
    user: "shadmin",
    pwd: "shpassword",
    roles: [
      {
        role: "readWrite",
        db: "shdb"
      }
    ]
  }
);
