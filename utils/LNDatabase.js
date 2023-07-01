class LNDatabase {
  URI;
  dbName;
  isConnected = false;

  constructor(URI, dbName) {
    this.URI = URI;
    this.dbName = dbName;
  }

  connect() {}

  find() {}
}
export default LNDatabase;
