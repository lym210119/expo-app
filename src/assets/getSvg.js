const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const svgDir = path.join(__dirname, "svg");
const outputFilePath = path.join(svgDir, "index.ts");

function generateIndexFile() {
  // 读取当前目录下的 svg 文件夹中的所有 .svg 文件
  fs.readdir(svgDir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    const svgs = {};

    // 遍历每个 .svg 文件
    files.forEach((filename) => {
      if (path.extname(filename) === ".svg") {
        const svgContent = fs.readFileSync(path.join(svgDir, filename), "utf8");
        const parsedName = path.parse(filename).name;
        svgs[parsedName] = svgContent;
      }
    });

    // 导出对象到一个 .ts 文件
    const output = `export default ${JSON.stringify(svgs, null, 2)};`;
    fs.writeFileSync(outputFilePath, output);

    console.log("Output file generated: index.ts");
  });
}

// 初始化生成 index.ts 文件
generateIndexFile();

// 监视 svg 文件夹变化
chokidar.watch(svgDir).on("all", (event, filePath) => {
  if (event === "add" && path.extname(filePath) === ".svg") {
    console.log(`New SVG file added: ${filePath}`);

    // 重新生成 index.ts 文件
    generateIndexFile();
  }
});
