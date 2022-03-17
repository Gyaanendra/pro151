AFRAME.registerComponent("rotation2",{
    schema:{
        rotation:{
            type:"number",
            default:0,
        }
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.rotation= this.data.rotation+0.005
        })
        var rot = this.el.getAttribute("rotation");
        rot.y=rot.y+this.data.rotation
        this.el.setAttribute("rotation",{x:rot.x,y:rot.y,z:rot.z})
    }
})