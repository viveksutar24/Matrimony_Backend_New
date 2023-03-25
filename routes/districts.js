var express = require("express");
let District = require("../models/District");
let Taluka = require("../models/Taluka");

let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let district = new District(body);
    district.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    });
});

router.get("/",(req,res)=>{
    District.find({}).sort({name:1}).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:id",(req,res)=>{
    District.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.put("/:id",(req,res)=>{
    let body = req.body;
    District.findByIdAndUpdate(req.params.id, body).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id",(req,res)=>{
    District.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.post("/taluka", (req, res)=>{
    let taluka = new Taluka(req.body);
    taluka.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
});

router.get("/taluka/:districtid", (req, res)=>{
    Taluka.find({districtid:req.params.districtid}).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/taluka/:id", (req, res)=>{
    Taluka.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

module.exports = router;