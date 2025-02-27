const artifacts = [
    { 
        name: "Алтын адам", 
        description: "Қазақстанның ең танымал археологиялық табысы.",
        image: "https://tengrinews.kz/userdata/images/u367/eb0bb4fac0e8ba5dcc3a5dfe05666994.jpg"
    },
    { 
        name: "Ботай мәдениеті", 
        description: "Жылқыны алғаш қолға үйреткен мәдениет.",
        image: "https://7-su.kz/uploads/news/18467/news18467.jpg"
    },
    { 
        name: "Сарайшық қаласы", 
        description: "Орта ғасырлардағы маңызды сауда орталығы.",
        image: "https://el.kz/upload/medialibrary/8e7/8e71ad8e535587652314a57804b17045.jpg"
    },
    { 
        name: "Есік қорғаны", 
        description: "Алтын адамның табылған жері.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhpMZDeFOFHMah1puTH2tcBzr_51rThHLPQ&s"
    },
    { 
        name: "Берел қорғандары", 
        description: "Алтайдағы сақ дәуірінің мұрасы.",
        image: "https://el.kz/upload/storage_el/13/137e5dd32a7e28f7e4bbd735aa59939d.jpg"
    },
    { 
        name: "Тамғалы петроглифтері", 
        description: "Тасқа қашалған ежелгі суреттер.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF5Hq2d62n2C23LoofiVRftu3sU3uhK_udQ&s"
    },
    { 
        name: "Отырар қалашығы", 
        description: "Ортағасырлық өркениеттің орталығы.",
        image: "https://qazir.kz/uploads/8e9b00a13474e089c7a63cd991a34c07.jpg"
    },
    { 
        name: "Қозыбас кеніші", 
        description: "Ежелгі кен өндірісі орны.",
        image: "https://malim.kz/images/article-img/1600/27663-1736200335-m.jpg"
    },
    { 
        name: "Ақыртас кешені", 
        description: "Жұмбақ көне ғимарат.",
        image: "https://upload.wikimedia.org/wikipedia/kk/b/bc/%D0%90%D2%9B%D1%8B%D1%80%D1%82%D0%B0%D1%81._VIII%E2%80%93XII_%D2%93%D2%93._%D0%A1%D0%BE%D0%BB%D1%82%D2%AF%D1%81%D1%82%D1%96%D0%BA-%D0%B1%D0%B0%D1%82%D1%8B%D1%81_%D0%BA%D3%A9%D1%80%D1%96%D0%BD%D1%96%D1%81%D1%96.jpg"
    },
    { 
        name: "Сауран қалашығы", 
        description: "Орта ғасырдағы ірі қалалардың бірі.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKscXygL4EOCOcvDAapbFWVJVmGB1b1VxoMQ&s"
    },
    { 
        name: "Қарамерген қалашығы", 
        description: "Орта ғасырлық ескі қала орны.",
        image: "https://qazaqstan3d.kz/upload/thumbed/1120x561/689034_1504797632_1120_561_0.jpg"
    },
    { 
        name: "Бозоқ қалашығы", 
        description: "Астана маңындағы ортағасырлық қала.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSQVWU1mXfa5rp62FGLgMftnVRrjQwKIvgg&s.jpg"
    },
    { 
        name: "Қаңлы мәдениеті", 
        description: "Б.з.д. III-I ғасырға жататын тарихи мұра.",
        image: "https://anatili.kazgazeta.kz/wp-content/uploads/Kanli.jpg"
    },
    { 
        name: "Түркістан қаласы", 
        description: "Қожа Ахмет Ясауи кесенесімен әйгілі.",
        image: "https://turkystan.kz/cache/imagine/1200/uploads/resized-images/2021/04/fb_img_1584207012462.jpg"
    },
    { 
        name: "Шірік-Рабат қалашығы", 
        description: "Ежелгі қамал қалашығы.",
        image: "https://egemen.kz/article_photo/1511320348_article_b.jpeg"
    },
    { 
        name: "Жетіасар мәдениеті", 
        description: "Қызылорда өңіріндегі көне өркениет.",
        image: "https://old.archaeology.kz/assets/monuments/3235bdae5ade2d8b4950ab7569472c4b/e2c08e0927189cb87f4bf81da7e50170.jpg"
    },
    { 
        name: "Баласағұн қаласы", 
        description: "Көне Түркістан аймағындағы ірі қала.",
        image: "https://qazaquni.kz/wp-content/uploads/2018/01/2018011910470655.jpg"
    },
    { 
        name: "Тараз қаласы", 
        description: "2000 жылдық тарихы бар көне қала.",
        image: "https://baq.kz/storage/cache_resize/news/2023/04/05/bHI5OMj8fAaP9no54KMmut9VV7cF0iT8LzGTQlS0.jpg_width=1200Xheight=autoXtype=1.jpg"
    },
    // { 
    //     name: "Сигнак қаласы", 
    //     description: "Ортағасырлық қамал қалашығы.",
    //     image: ""
    // },
    { 
        name: "Баба ата қалашығы", 
        description: "Қола дәуірінен қалған тарихи мекен.",
        image: "https://kazislam.kz/wp-content/uploads/2019/07/20190628_131415.jpg"
    },
    { 
        name: "Жанкент қаласы", 
        description: "Оғыз дәуіріндегі маңызды қала.",
        image: "https://old.archaeology.kz/assets/monuments/07fcc433cf7b692c76e2b8ead78e74e8/1a59afd693486cc5355f93c167842d1b.jpg"
    },
    { 
        name: "Күлтөбе қаласы", 
        description: "Тарихи қала орындары.",
        image: "https://kultobe.com/image/DSC_0535.JPG"
    },
    { 
        name: "Жамбыл қалашығы", 
        description: "Ортағасырлық маңызды орталықтардың бірі.",
        image: "https://mezgil.kz/d/file/2018-06-26/1529985107357965.jpg"
    },
    { 
        name: "Аңырақай шайқасы орны", 
        description: "Қазақ-жоңғар соғысының ірі шайқас орны.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/KZ_Kyzylorda_Region_Relief.png/280px-KZ_Kyzylorda_Region_Relief.png"
    },
    { 
        name: "Байғазы-Дәндібай мәдениеті", 
        description: "Қола дәуірінің археологиялық мұрасы.",
        image: "https://e-history.kz/media/upload/1534/2014/09/17/49fdb0d0b0dd852abdceffa931dd56de.png"
    }
];



document.addEventListener("DOMContentLoaded", function() {
    displayAllArtifacts();
});

function displayAllArtifacts() {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    artifacts.forEach(artifact => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <img src="${artifact.image}" alt="${artifact.name}" class="artifact-image">
            <h3>${artifact.name}</h3>
            <p>${artifact.description}</p>
        `;
        
        container.appendChild(card);
    });
}

function searchArtifact() {
    const query = document.getElementById("search").value.trim().toLowerCase();
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    if (!query) {
        alert("Іздеу үшін жәдігер атауын енгізіңіз!");
        displayAllArtifacts();
        return;
    }

    const results = artifacts.filter(artifact => artifact.name.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(artifact => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            card.innerHTML = `
                <img src="${artifact.image}" alt="${artifact.name}" class="artifact-image">
                <h3>${artifact.name}</h3>
                <p>${artifact.description}</p>
            `;
            
            container.appendChild(card);
        });
    } else {
        alert("Жәдігер табылмады!");
        displayAllArtifacts();
    }
}



// function displayAllArtifacts() {
//     const container = document.getElementById("cards-container");
//     container.innerHTML = ""; 

//     artifacts.forEach(artifact => {
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `<h3>${artifact.name}</h3><p>${artifact.description}</p>`;
//         container.appendChild(card);
//     });
// }

// function searchArtifact() {
//     const query = document.getElementById("search").value.trim().toLowerCase();
//     const container = document.getElementById("cards-container");
//     container.innerHTML = ""; 

//     if (!query) {
//         alert("Іздеу үшін жәдігер атауын енгізіңіз!");
//         displayAllArtifacts(); 
//         return;
//     }

//     const results = artifacts.filter(artifact => artifact.name.toLowerCase().includes(query));

//     if (results.length > 0) {
//         results.forEach(artifact => {
//             const card = document.createElement("div");
//             card.classList.add("card");
            
//             card.innerHTML = `
//                 <img src="${artifact.image}" alt="${artifact.name}" class="artifact-image">
//                 <h3>${artifact.name}</h3>
//                 <p>${artifact.description}</p>
//             `;
            
//             container.appendChild(card);
//         });
//     } else {
//         alert("Жәдігер табылмады!");
//         displayAllArtifacts(); 
//     }
// }

// displayAllArtifacts();



// function displayAllArtifacts() {
//     const container = document.getElementById("cards-container");
//     container.innerHTML = ""; 

//     artifacts.forEach(artifact => {
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `<h3>${artifact.name}</h3><p>${artifact.description}</p>`;
//         container.appendChild(card);
//     });
// }


// function searchArtifact() {
//     const query = document.getElementById("search").value.trim().toLowerCase();
//     const container = document.getElementById("cards-container");

//     container.innerHTML = ""; 

//     if (!query) {
//         alert("Іздеу үшін жәдігер атауын енгізіңіз!");
//         displayAllArtifacts(); 
//         return;
//     }

//     const results = artifacts.filter(artifact => artifact.name.toLowerCase().includes(query));

//     if (results.length > 0) {
//         results.forEach(artifact => {
//             const card = document.createElement("div");
//             card.classList.add("card");
//             card.innerHTML =`<h3>${artifact.name}</h3><p>${artifact.description}</p>`;
//             container.appendChild(card);
//         });
//     } else {
//         alert("Жәдігер табылмады!");
//         displayAllArtifacts(); 
//     }
// }


// displayAllArtifacts();

