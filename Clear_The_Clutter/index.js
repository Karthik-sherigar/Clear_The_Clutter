import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\sheri\\OneDrive\\Desktop\\FullStack\\Express_JS\\Challenges\\Clear_The_Clutter"

    let files = await fs.readdir(basepath)
    for (const item of files) {
        let ext = item.split(".")[item.split(".").length-1]
        console.log(ext)
        if(ext!="json" && ext!="js" && item.split(".").length>1){
            if(fsn.existsSync(path.join(basepath,ext))){
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
            }
            else{
                fs.mkdir(ext)
                fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
    
            }
        }
      
    }

