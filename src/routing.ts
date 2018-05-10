import fs from "fs";
import path from "path";

/**
 * Pobieranie wszystkich moduĹĂłw aplikacji
 *
 * @param {string} folder nazwa folderu
 * @returns {Promise<string[]>} lista nazw plikĂłw
 * @memberof Global
 */
export let AllModules = (folder: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, folder), (err, files) => {
      if (err) {
        resolve([]);
        reject(err);
      } else {
        var result: string[] = [];
        for (let file of files) {
          if (file.indexOf("index") == -1 && file.indexOf(".js.map") == -1) {
            result.push(file.replace(".ts", "").replace(".js", ""));
          }
        }
        resolve(result);
      }
    });
  });
};
/**
 * Ĺadowanie wszystkich ĹcieĹźek aplikacji
 *
 * @param {*} router
 * @param {string} folder
 * @returns {Promise<number>}
 * @memberof Global
 */
export let LoadAllRoutes = async (
  router: any,
  folder: string
): Promise<number> => {
  let files = await this.AllModules(folder);
  let count = 0;
  for (let file of files) {
    console.log(`load route: ${folder}/${file}`);
    var rr = require(__dirname + "/" + folder + "/" + file);
    router.use("/" + file, rr.default);
    count++;
  }
  return count;
};