// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default function handler(req, res) {
  fs.readdir("songs2",'utf-8').then((err,data)=>{
    res.status(200).json(json.stringify(data))
  })
  
}
