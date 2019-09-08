import React from 'react';

class Items extends React.Component{


    renderRows(){
        // Clean Data
        const formatted = {};
        this.props.data.forEach((e,i) => {
            const key = e.category.replace("˝","");
            if (formatted.hasOwnProperty(key)){
                formatted[key].push(e)
            }else{
                formatted[key]= [e]
            }
        });
        let  ret = [];
        for (let key of Object.keys(formatted)){
            ret.push(
                <tr><td><strong>{key}</strong></td></tr>
            )
            const temp = formatted[key].map( (e,i) => {
                if(e.stocked){
                    return <tr><td>{e.name}</td><td>{e.price}</td></tr>
                }else if( this.props.showOnlyStocked && !e.stocked){
                    console.log("WHaat")
                }else if( !this.props.showOnlyStocked && !e.stocked){
                    return <tr style={{color:"red"}}><td>{e.name}</td><td>{e.price}</td></tr>
                }
            });
         
            ret = [...ret, ...temp];
        }
        return ret;
    }
    render(){
        const rows = this.renderRows();
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
export default Items;