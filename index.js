let main_section = document.querySelector( `.main_section` )

function get_artist()
{

    axios.request( {
    
        url: `http://127.0.0.1:5000/api/painting`,
        data: {
          
        }
         
    } ).then( ( response ) =>
    {
        res_data = response[`data`]
        for ( let i = 0;i< res_data.length; i++ ){
            main_section.insertAdjacentHTML( `beforeend`, `<h3 style="color:red;">${res_data[i][`name`]}</h3> <img style="width:200px; height:200px; margin:30px; " src="${res_data[i][`image_url`]}" alt="image">` )
        }


        console.log( response )
    } ).catch( ( error ) =>
    {
        error;
        
    } )
}

let get_btn = document.querySelector( '.btn' )

get_btn.addEventListener( 'click', get_artist )
function post_artist(){
    let artist_input = document.getElementById('artist_input')
    let artist_value=artist_input.value
    let name_input = document.getElementById( 'name_input' )
    let name_value=name_input.value
    let date_input = document.getElementById( 'date_input' )
    let date_value=date_input.value
    let image_input = document.getElementById( 'image_url_input' )
    let image_value=image_input.value
    axios.request( {
        
        url: `http://127.0.0.1:5000/api/painting`,
           method: `POST`,
        data: {
               
            "artist": artist_value,
            "name": name_value,
            "date_painted": date_value,
            "image_url":image_value 
               
        }
    } ).then( ( response ) =>{
  
        console.log('successfully added artist' )
    } ).catch( ( error ) =>
    {
        console.log('faild to add artist')
       
    } )
}

let  get_submit = document.querySelector('.submit' )

get_submit.addEventListener( 'click', post_artist ) 

