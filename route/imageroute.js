const express= require('express')
const router= express.Router;
const image = require('../modelling/schema.js');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const req = require('express/lib/request');

//route for finding all the images
route.get('/image', async ()=>{
    if(!image){
return res.status(404).send({message: "The image isn't found"})
    }

   try{
const GetImage= await image.find();
   } catch(e){
return res.send(400).send({message:'error'})
   }
})

//route for retrieving a single fish image
route.get('/image/:id', async ()=>{
    //validate the availability of the specific aquarium image
    if(!aquariumImage){
      return res.status(400).send({message: 'the fish image with the given Id was not found'})
    }
    try{
    const getImageById= await image.findById(req.param.imageId)
    }
    catch(e){
        return res.send({message: 'sorry this is an error'})
    }
})

//route for posting the file
router.post("multerInstance.upload.single('image')", async()=>{
    //validating the request
    if(!req.file.path){
       return res.status(404).send({message: "the image you are surving for isn't found"})
    }
    const postImage= new image({
        image: req.file.path,
        title: req.body.title,
        description: req.body.description
    })
    try{
const image= await image.save()
    }
    catch(error){
return res.send({message: 'error message'})
    }
})

//route for updating specific image
route.update('/image/:id', async (req, res)=>{

    //validate sent request
    if(!image){
       return res.status(404).send({message: "The image cannot be empty"})
    }
    const updateImage= new({ title: req.body.title || "Untitled Note",
    description: req.body.description
})
    try{
const updateImage= await image.findByIdAndUpdate(req.params.noteId)
}
    catch(error){
return res.send({message: "error message"})
    }
})

//router for deleting specific image by Id
router.delete('/image/:id', (req, res)=>{
   //validate request
   if(err.kind=== 'imageId' || err.name=== 'imageName'){
       return res.status(404).send({message:"The image with Id isn't available"})
   } try{
   const deleteImage= image.findByIdAndRemove(req.params.noteId)
   }
   catch(error){
      return res.status(404).send({message: "the image isn't available"})
   }
})

module.export= router;