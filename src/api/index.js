import ajax from "./ajax"

// export function reqinfoCard(){
//     return ajax("https://lab.isaaclin.cn//nCoV/api/overall")
// }

const BASE = ""
export const reqinfoCard = () => ajax(BASE + "/nCoV/api/overall")
export const reqInfoCardInChina = () => ajax(BASE + "/infoCardInChina")
export const reqMapChartInChinaAll = () => ajax(BASE + "/mapChartInChinaAll")
export const reqIncreaseTrendInChina =()=>ajax(BASE+"/increaseTrendInChina")
export const reqConfirmTrendInChina =()=>ajax(BASE+"/confirmTrendInChina")
export const reqDeadCureTrendInChina =()=>ajax(BASE+"/deadCureTrendInChina")


export const reqInfoCardInWorld = () => ajax(BASE + "/infoCardInWorld")
export const reqMapChartInWorldAll=()=>ajax(BASE+"/mapChartInWorldAll")
export const reqConfirmTrendInWorld=()=>ajax(BASE+"/confirmTrendInWorld")
export const reqDeadTrendInWorld =()=>ajax(BASE+"/deadTrendInWorld")

export const reqInfoCardInProvince=(data)=>ajax(BASE+"/infoCardLocal",data)
export const reqMapChartInProvince=(data)=>ajax(BASE+"/mapChartLocal",data)
export const reqConfirmTrendInProvince=(data)=>ajax(BASE+"/confirmTrendInProvince",data)
export const reqDeadCureTrendInProvince=(data)=>ajax(BASE+"/deadCureTrendInProvince",data)