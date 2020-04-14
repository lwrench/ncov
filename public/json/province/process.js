const fs = require('fs');
const path = require('path')

const basePath = 'incubator-echarts/map/json/province'

let provincename = []

const readDir = (entry) => {
    let filelist = []
    const dirInfo = fs.readdirSync(entry);
    dirInfo.forEach(item => {
        const location = path.join(entry, item);
        const info = fs.statSync(location);
        if (info.isDirectory()) {
            readDir(location);
        } else {
            filelist.push(location)
        }
    })

    filelist.forEach(file => {
        const data = fs.readFileSync(file)

        let name = data.toString();//将二进制的数据转换为字符串
        name = JSON.parse(name);//将字符串转换为json对象
        let len = name.features.length
        let list = []
        for (let i = 0; i < len; i++) {
            list.push(name.features[i].properties.name)
        }
        let provname = file.split("\\")
        const t = { "provincename": provname[4].split(".")[0], "city": list }
        provincename.push(t)
    })

}

readDir(basePath)
let str = JSON.stringify(provincename, null, 4)
fs.writeFileSync('province.json', str, 'utf8', (err) => {
    if (err) throw err;
    console.log('done');
});

