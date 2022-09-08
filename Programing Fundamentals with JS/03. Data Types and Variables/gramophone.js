function gramophone(band, album, song){
    let durationInSec = (((album.length * band.length) * song.length / 2) / 2.5);
    durationInSec = Math.ceil(durationInSec)
    console.log(`The plate was rotated ${durationInSec} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');
