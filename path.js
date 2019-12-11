exports.Path = class Path
{
  /**
   * Converts a relative path into a full path.
   * @param {string} relativePath Path to convert.
   */
  static relativeToFull(relativePath) {
    relativePath = relativePath.replace(/\\+|\/\/+/g, "/");
    if (relativePath.startsWith("./")) {
      relativePath = relativePath.substring(2);
    }
    relativePath = Path.correct(__dirname+"/"+relativePath);
    return relativePath;
  }

  /**
   * Corrects a path's ``\`` into ``/`` and double slashes will turn into singles. Removes irrelevant ``./``.
   * @param {string} path Path to correct
   */
  static correct(path) {
    path = path.replace(/\\+|\/\/+/g, "/");
    while (/\/\.\//g.test(path)) {
      path = path.replace(/\/\.\//g, "/");
    }

    return path;
  }

  /**
   * Get the file name of a path.
   * @param {string} filePath File path to get the name from.
   */
  static filename(filePath) {
    return Path.correct(filePath).split("/").pop();
  }
}