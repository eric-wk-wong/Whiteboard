import React from 'react';

function HomepageImage(){

    const url = "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/08/smurfs_a_1.jpg"

    return (
        <img src={url} style={{width: 650}} alt='Team Image' />
    );
}

export default HomepageImage;