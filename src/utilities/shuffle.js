const shuffle = () => {
    const assets = [
        { image: '/assets2/1.png' },
        { image: '/assets2/2.png' },
        { image: '/assets2/3.png'},
        { image: '/assets2/4.png' },
        { image: '/assets2/5.png' },
        { image: '/assets2/6.png' },
        { image: '/assets2/7.png'},
        { image: '/assets2/8.png' },
    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
    };
  
  export default shuffle;