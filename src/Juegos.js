// Juegos.js
import React, { useState } from "react";
import categorias from "./categorias";
import fondo from "./imagenes/fondodef1.jpg";

const Juegos = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const subcategorias = {
    Acción: ["Aventura Acción", "Disparos", "Luchas"],
    Aventura: ["Aventura Gráfica", "Mundo Abierto"],
    Estrategia: ["Estrategia en Tiempo Real", "Estrategia por Turnos"],
    Deportes: ["Fútbol", "Baloncesto", "Automovilismo"],
    Rol: ["RPG de Acción", "RPG por Turnos"],
    Simulacion: ["Simulación de Vida", "Simulación de Negocios"],
    // Agrega más subcategorías según sea necesario
  };

  const toggleSubMenu = (category) => {
    setShowSubMenu(!showSubMenu);
    setSelectedCategory(category);
  };
  const openGameDetails = (juego) => {
    const nuevaPestana = window.open("", "_blank");
    nuevaPestana.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              color: white;
              background-image: url('${fondo}');
              background-size: cover; /* Ajusta el tamaño de la imagen */
              background-position: center; /* Centra la imagen */
              padding: 20px;
              text-align: center;
            }
            h1 {
              color: white;
              font-size: 70px;
            }
            img {
              max-width: 100%;
              height: 75vh;
              margin-top: 20px;
            }
            p {
              color: white;
              margin-top: 40px;
              margin-bottom: 15px;
              font-size: 30px;
            }
            a {
              color: violet;
              text-decoration: none;
              margin-right: 10px;
              font-size: 35px;
            }
          </style>
        </head>
        <body>
          <h1>${juego.titulo}</h1>
          <img src="${juego.imagen}" alt="${juego.titulo}" />
          <p>${juego.descripcion}</p>
          <p>${juego.informacion}</p>
          <a href="${juego.enlaces.plataforma1}" target="_blank" rel="noopener noreferrer">Plataforma 1</a>
          <a href="${juego.enlaces.plataforma2}" target="_blank" rel="noopener noreferrer">Plataforma 2</a>
          <!-- Agrega más enlaces según sea necesario -->
        </body>
      </html>
    `);
    nuevaPestana.document.close();
  };
  
  


  const juegos = [
    {
      id:1,
      titulo: "Minecraft",
      imagen: "https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg",
      descripcion: "Es un videojuego tipo sandbox, su traducción literal sería “caja de arena” y es lo que representa la experiencia de juego. Los jugadores pueden modelar el mundo a su gusto, destruir y construir, como si estuviesen jugando en una caja de arena.",
      informacion: "Desarrollador: Mojang | Lanzamiento: 2011",
      enlaces: {
        plataforma1: "https://www.minecraft.net/",
        plataforma2: "https://www.microsoft.com/",
        // Agrega más enlaces según sea necesario
      },
      categoria:"Aventura",
      subcategoria:"Mundo Abierto",
    },
    {
      id:2,
      titulo: "League Of Legends",
      imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/UNYVC3MXWBCDZB63W6NLY4XG4U.jpg",
      descripcion: "Esto no es un juego...",
      informacion: "Desarrollador: Riot Games | Lanzamiento: 2009",
      enlaces: {
        plataforma1: "https://na.leagueoflegends.com/",
        plataforma2: "https://www.riotgames.com/",
      },
    },
    {
      id:3,
      titulo: "Fortnite",
      imagen: "https://cdn2.unrealengine.com/fortnite-chapter-4-og-overview-page-key-art-bg-1920x1080-1fbc3a1c0297.jpg",
      descripcion: "Es un juego de tipo batalla real en el que compiten hasta cien jugadores en solitario, dúos, tríos o escuadrones. Los jugadores saltan de un autobús que cruza el mapa en el momento que deseen, y empiezan sin armas.",
      informacion: "Desarrollador: Epic Games | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://www.epicgames.com/fortnite/",
        plataforma2: "https://www.microsoft.com/",
      },
    },
    // Nuevos juegos agregados
    {
      id:4,
      titulo: "Counter Strike 2",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631",
      descripcion: "Juego para decente si no sos valorant player",
      informacion: "Desarrollador: Valve | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/730/CounterStrike_2/?l=spanish",
        plataforma2: "https://counter-strike-2.softonic.com/?utm_source=SEM&utm_medium=paid&utm_campaign=ES_LATAM_DSA_HKD&gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6kVvnL9BAarSoFkPMD7ZKlLVZWi62RPLd8DODg9VuYZUlFlPo8oDk0aAjghEALw_wcB",
      },
    },
    {
      id:5,
      titulo: "Valorant",
      imagen: "https://elcomercio.pe/resizer/ghNTXaR0fUeti0L4vWsf68DwT50=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4MHMRA6XNNDQPDQMS2AXL43PBY.jpg",
      descripcion: "El mejor juego de todo el mundo",
      informacion: "Desarrollador: Riot Games | Lanzamiento: 2020",
      enlaces: {
        plataforma1: "https://playvalorant.com/es-mx/",
        plataforma2: "https://store.epicgames.com/es-ES/p/valorant",
      },
    },
    {
      id:6,
      titulo: "Far Cry 6",
      imagen: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
      descripcion: "Juega con Dani Rojas como chico o chica y vive una historia absorbente que te lleva de ser un ciudadano reacio a un líder que lucha contra el régimen de Antón. Salta a la acción y el caos del combate de la guerrilla y reúne soldados y recursos que te ayudarán en la lucha.",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/far-cry/far-cry-6",
        plataforma2: "https://store.steampowered.com/agecheck/app/2369390/?l=spanish",
        plataforma3: "https://store.epicgames.com/es-ES/p/far-cry-6",
      },
    },
    {
      id:8,
      titulo: "Far Cry 5",
      imagen: "https://image.api.playstation.com/cdn/EP0001/CUSA05847_00/pEBJnRh6DeL2BfyZRa9jZRrNuSav42QPJIXyqo6Rgcr52o9kYLwY4EpouAzWh4Fu.png",
      descripcion: "Se trata de la quinta entrega de la famosa saga de videojuegos Far Cry. En esta ocasión deberemos hacer frente a una secta apocalíptica conocida como la puerta del Edén que tiene su sede en el corazón de Hope County, Montana, en Estados unidos.",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/552520/",
        plataforma2: "https://www.ubisoft.com/es-mx/game/far-cry/far-cry-5",
      },
    },
    {
      id:9,
      titulo: "Far Cry 4",
      imagen: "https://image.api.playstation.com/cdn/UP0001/CUSA03352_00/qIwBayp8jH2SI6qictktqzHRSGsqtU2k.png",
      descripcion: "Oculto entre las imponentes cumbres del Himalaya se esconde Kyrat, un país sumido en la tradición y la violencia. Eres Ajay Ghale. Mientras viajas a Kyrat para cumplir el último deseo de tu madre, te ves envuelto en una guerra civil para derrocar el opresivo régimen del dictador Pagan Min.",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2014",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/far-cry/far-cry-4",
        plataforma2: "https://store.steampowered.com/agecheck/app/298110/?l=spanish",
      },
    },
    {
      id:10,
      titulo: "Far Cry 3",
      imagen: "https://cdn1.epicgames.com/hellebore/offer/GameName_Edition_Capsule_1920X1080-1920x1080-3131a5c2e251c88843f63801db17885ae66ca44b.jpg",
      descripcion: "El objetivo principal del juego es rescatar a los amigos y novia del protagonista, capturados por los piratas que habitan en las islas, y escapar de las mismas.",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2012",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/far-cry/far-cry-3",
        plataforma2: "https://store.steampowered.com/agecheck/app/220240/?l=spanish",
      },
    },
    {
      id:11,
      titulo: "Resident Evil 8",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
      descripcion: "Resident Evil 8: Village se enfocará en la exploración y la búsqueda de recursos a través del pueblo y sus tenebrosos alrededores, así como en el combate visceral contra estos monstruos que prometen ser más duros que nunca.",
      informacion: "Desarrollador: Capcom | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1196590/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/resident-evil-village/9MW7MFV29CMF",
      },
    },
    {
      id:12,
      titulo: "Resident Evil 7",
      imagen: "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png",
      descripcion: "El jugador controla a Ethan Winters mientras busca a su esposa Mia en una plantación abandonada ocupada por una familia controlada por una niña llamada Eveline, que a través de un hongo o un virus respiratorio, infecta el cuerpo y la mente.",
      informacion: "Desarrollador: Capcom | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/418370/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/resident-evil-7-biohazard/bvfdtj1xf6cs",
      },
    },
    {
      id:13,
      titulo: "Resident Evil 6",
      imagen: "https://www.somosxbox.com/wp-content/uploads/2015/12/resident-evil-6-xbox-one.jpg",
      descripcion: "La historia comienza en junio del 2013 donde Leon al ver a un zombificado Adam Benford, presidente de los Estados unidos a punto de atacar a una desconocida en ese entonces Helena, se ve obligado a dispararle para justo después informarle a Ingrid Hunnigan el desastre viral ocurrido en el pueblo de Tall Oaks.",
      informacion: "Desarrollador: Capcom | Lanzamiento: 2012 ",
      enlaces: {
        plataforma1: "https://www.xbox.com/es-AR/games/store/resident-evil-6/BXCVNFBPZHXQ/0001",
        plataforma2: "https://store.steampowered.com/agecheck/app/221040/",
      },
    },
    {
      id:14,
      titulo: "Assassin's Creed Origins",
      imagen: "https://image.api.playstation.com/cdn/UP0001/CUSA05855_00/yYiGRi9oya2bnKV9QnZ65ghdgBTVWQfI.png",
      descripcion: "Descubre el origen de la hermandad de los asesinos en el antiguo Egipto.",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/assassins-creed/origins",
        plataforma2: "https://store.steampowered.com/agecheck/app/582160/",
      },
    },
    {
      id:15,
      titulo: "Assassin's Creed Valhalla",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png",
      descripcion: "Embárcate en una épica saga vikinga en la era de los saqueos y la conquista.",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2020",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/assassins-creed/valhalla",
        plataforma2: "https://store.steampowered.com/agecheck/app/2208920/",
      },
    },
    {
      id:16,
      titulo: "God of War",
      imagen: "https://rickygame.com.ar/wp-content/uploads/2021/09/god-41-43a2e19293fa5c11cd15879211330939-1024-1024.jpg",
      descripcion: "Acompaña a Kratos, el dios de la guerra, en una emocionante odisea nórdica junto a su hijo Atreus.",
      informacion: "Desarrollador: Santa Monica Studio | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1593500/",
        plataforma2: "https://www.playstation.com/es-ar/games/god-of-war/",
      },
    },
    {
      id:17,
      titulo: "The Walking Dead",
      imagen: "https://image.api.playstation.com/cdn/UP2026/CUSA11998_00/SV3Q3aE4B7eJHJix5gw5GFqnx5gIndbW.png",
      descripcion: "Sumérgete en un apocalipsis zombi donde tus decisiones afectan el curso de la historia.",
      informacion: "Desarrollador: Telltale Games | Lanzamiento: 2012",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/207610/?l=spanish&curator_clanid=6864554",
        plataforma2: "https://www.xbox.com/es-AR/games/store/the-walking-dead-the-complete-first-season/bw6b077fch11",
      },
    },
    {
      id:18,
      titulo: "EA SPORTS FC 24",
      imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/07/ea-sports-fc-24-todo-sabemos-sucesor-fifa-24-3084248.jpg?tf=3840x",
      descripcion: "Experimenta la emoción del fútbol con la última entrega de la aclamada serie FIFA.",
      informacion: "Desarrollador: EA Sports | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/2195250/EA_SPORTS_FC_24/?l=spanish",
        plataforma2: "https://store.epicgames.com/es-ES/p/ea-sports-fc-24--ultimate-edition",
      },
    },
    {
      id:19,
      titulo: "Rust",
      imagen: "https://papu.host/templates/aceorbit/html/images/RustHosting.jpg",
      descripcion: "Sobrevive en un mundo hostil, forma alianzas y construye para resistir a los elementos y a otros jugadores.",
      informacion: "Desarrollador: Facepunch Studios | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/252490/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/rust/9NPHHZBV60B4",
      },
    },
    {
      id:20,
      titulo: "Raft",
      imagen: "https://bolavip.com/__export/1655835767548/sites/bolavip/img/2022/06/21/araft.png_242310155.png",
      descripcion: "Naufraga en un océano infinito y construye tu propio bote flotante mientras sobrevives a peligros marinos.",
      informacion: "Desarrollador: Redbeet Interactive | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/648800/Raft/",
        plataforma2: "https://store.epicgames.com/es-ES/p/survive-on-raft-9845bd",
      },
    },
    {
      id:21,
      titulo: "Mortal Kombat",
      imagen: "https://www.enter.co/wp-content/uploads/2023/05/Mortal-Kombat-1-Logo.png",
      descripcion: "Enfréntate a luchadores icónicos en intensos combates uno contra uno.",
      informacion: "Desarrollador: NetherRealm Studios | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1971870/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/mortal-kombat-1/9n7271qn4sgb",
      },
    },
    {
      id:22,
      titulo: "Dead by Daylight",
      imagen: "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503",
      descripcion: "Sumérgete en un juego asimétrico donde un asesino persigue a cuatro supervivientes en un entorno terrorífico.",
      informacion: "Desarrollador: Behaviour Interactive | Lanzamiento: 2016",
      enlaces: {
        plataforma1: "https://store.epicgames.com/es-ES/p/dead-by-daylight",
        plataforma2: "https://store.steampowered.com/agecheck/app/381210/",
      },
    },
    {
      id:23,
      titulo: "Rainbow Six Siege",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/377560/capsule_616x353.jpg?t=1450287062",
      descripcion: "Participa en emocionantes enfrentamientos tácticos en equipos de operadores especializados.",
      informacion: "Desarrollador: Ubisoft Montreal | Lanzamiento: 2015",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/rainbow-six/siege",
        plataforma2: "https://store.steampowered.com/agecheck/app/359550/ ",
      },
    },
    {
      id:24,
      titulo: "Valheim",
      imagen: "https://assets.xboxservices.com/assets/06/f9/06f9b422-9489-42bc-bea0-00fdcda498b8.jpg?n=379128_GLP-Page-Hero-1084_1920x1080.jpg",
      descripcion: "Explora un mundo místico vikingo, construye, lucha contra criaturas y asciende a la gloria.",
      informacion: "Desarrollador: Iron Gate AB | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/892970/Valheim/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/valheim",
      },
    },
    {
      id:25,
      titulo: "Roblox",
      imagen: "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht",
      descripcion: "Sumérgete en un universo de juegos creados por la comunidad, ¡donde la imaginación es el límite!",
      informacion: "Desarrollador: Roblox Corporation | Lanzamiento: 2006",
      enlaces: {
        plataforma1: "https://www.roblox.com/download",
        plataforma2: "https://www.xbox.com/es-AR/games/store/roblox/BQ1TN1T79V9K/0001",
      },
    },
    {
      id:26,
      titulo: "Bully",
      imagen: "https://store-images.s-microsoft.com/image/apps.22912.66873235889732843.685adf61-8959-427d-8c3e-e4a5ef4bf7f5.430d3a55-1a75-4b7a-8bd0-021b167285a1?q=90&w=480&h=270",
      descripcion: "Vive la vida de Jimmy Hopkins, un estudiante travieso, en un internado lleno de personajes únicos.",
      informacion: "Desarrollador: Rockstar Vancouver | Lanzamiento: 2006",
      enlaces: {
        plataforma1: "https://www.rockstargames.com/es/games/bully",
        plataforma2: "https://store.steampowered.com/app/12200/Bully_Scholarship_Edition/?l=spanish",
      },
    },
    {
      id:27,
      titulo: "Need for Speed",
      imagen: "https://media.contentapi.ea.com/content/dam/need-for-speed/images/2017/06/nfspgenkeyartrgbhorz-16x9.jpg.adapt.crop191x100.1200w.jpg",
      descripcion: "Experimenta la emoción de las carreras callejeras y personaliza autos en la icónica serie de juegos de carreras.",
      informacion: "Desarrollador: Ghost Games | Lanzamiento: 2016",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1262540/Need_for_Speed/?l=spanish",
        plataforma2: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-heat",
      },
    },
    {
      id:28,
      titulo: "Horizon Zero Dawn",
      imagen: "https://m.media-amazon.com/images/M/MV5BODZjMmYyNDktYWRjZi00MmM1LWE0ODEtZjdhOWQ2OWRhNzkwXkEyXkFqcGdeQXVyMjMyNTU1MjE@._V1_FMjpg_UX1000_.jpg",
      descripcion: "Embárcate en una emocionante aventura en un mundo postapocalíptico dominado por máquinas.",
      informacion: "Desarrollador: Guerrilla Games | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1151640/?l=spanish",
        plataforma2: "https://store.epicgames.com/es-ES/p/horizon-zero-dawn-complete-edition",
      },
    },
    {
      id:29,
      titulo: "Payday 2",
      imagen: "https://image.api.playstation.com/cdn/UP4040/CUSA01770_00/ollIGJilKyopCPcNF5BGcIEQ4Ktwlofj.png",
      descripcion: "Forma parte de un equipo de criminales en esta experiencia cooperativa de atracos y acción.",
      informacion: "Desarrollador: Overkill Software | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/218620/?l=spanish",
        plataforma2: "https://store.epicgames.com/es-ES/p/payday-2-c66369",
      },
    },
    {
      id:30,
      titulo: "GTA V",
      imagen: "https://image.api.playstation.com/cdn/UP1004/CUSA00419_00/bTNSe7ok8eFVGeQByA5qSzBQoKAAY32R.png",
      descripcion: "Explora el bullicioso mundo de Los Santos y participa en una variedad de actividades delictivas.",
      informacion: "Desarrollador: Rockstar North | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://www.rockstargames.com/es/gta-v",
        plataforma2: "https://store.steampowered.com/agecheck/app/271590/?l=spanish",
      },
    },
    {
      id:31,
      titulo: "Sea of Thieves",
      imagen: "https://logos-world.net/wp-content/uploads/2021/02/Sea-Of-Thieves-Emblem.png",
      descripcion: "Embárcate en una aventura pirata en un mundo compartido lleno de tesoros, criaturas y otros jugadores.",
      informacion: "Desarrollador: Rare Ltd. | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1172620/Sea_of_Thieves_2023_Edition/",
        plataforma2: "https://www.xbox.com/es-ar/games/store/sea-of-thieves-2023-edition/9p2n57mc619k",
      },
    },
    {
      id:32,
      titulo: "Forza Horizon 5",
      imagen: "https://store-images.s-microsoft.com/image/apps.28758.13734397844529069.202e3fc9-37d6-4853-a58b-fabe504b71e8.4335e940-f927-4be4-af08-8e689a17bd7a?q=90&w=177&h=177",
      descripcion: "Disfruta de carreras en un mundo abierto ambientado en México, con gráficos impresionantes y una amplia variedad de autos.",
      informacion: "Desarrollador: Playground Games | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/forza-horizon-5",
      },
    },
    {
      id:33,
      titulo: "Forza Horizon 4",
      imagen: "https://store-images.s-microsoft.com/image/apps.2050.14339303838396367.725ab8dd-f8b7-4a29-a351-45ebd5d66edd.101ea039-4868-42ba-a0fe-835c1b2f1a52?q=90&w=177&h=177",
      descripcion: "Explora la hermosa campiña británica en un juego de carreras de mundo abierto con una amplia variedad de autos y desafíos.",
      informacion: "Desarrollador: Playground Games | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://www.xbox.com/es-AR/games/forza-horizon-4",
        plataforma2: "https://store.steampowered.com/app/1293830/Forza_Horizon_4/",
      },
    },
    {
      id:34,
      titulo: "Brawlhalla",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202305/1523/5aaaa377b9a4803f932a1aa4f4b18d8b12ca7c29490dfb14.jpg",
      descripcion: "Enfréntate a otros jugadores en intensas peleas de plataformas en este juego de lucha gratuito con personajes únicos.",
      informacion: "Desarrollador: Blue Mammoth Games | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/291550/Brawlhalla/?l=spanish",
        plataforma2: "https://www.ubisoft.com/es-mx/game/brawlhalla/brawlhalla",
      },
    },
    {
      id:35,
      titulo: "Subnautica",
      imagen: "https://acdn.mitiendanube.com/stores/001/159/532/products/subnau1-a97ab06423a52ba80e15898394833978-640-0.jpg",
      descripcion: "Sumérgete en las profundidades de un planeta alienígena, recolecta recursos y sobrevive a criaturas marinas en este juego de aventuras submarinas.",
      informacion: "Desarrollador: Unknown Worlds Entertainment | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/264710/Subnautica/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/subnautica/bx3s1q5dvhrd",
      },
    },
    {
      id:36,
      titulo: "Subnautica: Below Zero",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202103/1000/ajXEVMJhzxXuOezVXR6bFOkK.png",
      descripcion: "Explora un mundo helado alienígena, construye bases submarinas y descubre los secretos ocultos en la secuela de Subnautica.",
      informacion: "Desarrollador: Unknown Worlds Entertainment | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/848450/Subnautica_Below_Zero/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/subnautica-below-zero/9NDCJXL11096",
      },
    },
    {
      id:37,
      titulo: "Fall Guys: Ultimate Knockout",
      imagen: "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-00-1920x1080-75b891d04ff9.jpg",
      descripcion: "Participa en competiciones caóticas en línea con otros jugadores en este divertido juego de batallas reales.",
      informacion: "Desarrollador: Mediatonic | Lanzamiento: 2020",
      enlaces: {
        plataforma1: "https://store.epicgames.com/es-ES/p/fall-guys",
        plataforma2: "https://www.xbox.com/es-AR/games/store/fall-guys/9PMXH5249DG5",
      },
    },
    {
      id:38,
      titulo: "Overwatch 2",
      imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Overwatch2_Season6.png",
      descripcion: "Prepárate para intensas batallas en equipo en este juego de disparos en primera persona, la secuela del exitoso Overwatch.",
      informacion: "Desarrollador: Blizzard Entertainment | Lanzamiento: 2022",
      enlaces: {
        plataforma1: "https://overwatch.blizzard.com/es-es/",
        plataforma2: "https://us.shop.battle.net/es-es/product/overwatch",
      },
    },
    {
      id:39,
      titulo: "Call of Duty: Black Ops 3",
      imagen: "https://m.media-amazon.com/images/M/MV5BNWMwYmE3NmMtZjFlYS00Y2M0LTljOTEtY2NhNGQ3Y2E1MWQyXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
      descripcion: "Sumérgete en un conflicto militar futurista con habilidades mejoradas y enfrentamientos en este juego de la serie Call of Duty.",
      informacion: "Desarrollador: Treyarch | Lanzamiento: 2015",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/311210/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/call-of-duty-black-ops-iii/C3Q2WWJJ2T1H",
      },
    },
    {
      id:40,
      titulo: "Call of Duty: Black Ops 2",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/202970/capsule_616x353.jpg?t=1654830020",
      descripcion: "Viaja al pasado reciente y participa en operaciones encubiertas en este exitoso juego de la serie Call of Duty.",
      informacion: "Desarrollador: Treyarch | Lanzamiento: 2012",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/202970/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/call-of-duty-black-ops-ii/c1qjm5xt9sxv",
      },
    },
    {
      id:41,
      titulo: "Call of Duty: Black Ops",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/42700/capsule_616x353.jpg?t=1654809667",
      descripcion: "Experimenta la Guerra Fría y participa en operaciones secretas en este clásico juego de la serie Call of Duty.",
      informacion: "Desarrollador: Treyarch | Lanzamiento: 2010",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/42700/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/call-of-duty-black-ops/bvmgcsx6xpc9",
      },
    },
    {
      id:42,
      titulo: "The Binding of Isaac",
      imagen: "https://fontmeme.com/images/binding-of-isaac-box-font.jpg",
      descripcion: "Juego nefasto...xd",
      informacion: "Desarrollador: Edmund McMillen | Lanzamiento: 2011",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/113200/The_Binding_of_Isaac/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/the-binding-of-isaac-rebirth/BQD45PQR4F4J",
      },
    },
    {
      id:43,
      titulo: "The Outlast Trials",
      imagen: "https://cdn1.epicgames.com/6504cc61472e498796e0b4963a201438/offer/EGS_TheOutlastTrials_RedBarrels_S1-2560x1440-94e9ca382991373a4a464665014a78d4.jpg",
      descripcion: "Sobrevive a horrores cooperativos en este juego de terror ambientado en la Guerra Fría, parte de la serie Outlast.",
      informacion: "Desarrollador: Red Barrels | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1304930/The_Outlast_Trials/",
        plataforma2: "https://store.epicgames.com/es-ES/p/the-outlast-trials",
      },
    },
    {
      id:44,
      titulo: "Outlast 2",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/414700/capsule_616x353.jpg?t=1618944453",
      descripcion: "Explora un entorno aterrador y descubre los oscuros secretos de una secta en esta secuela del exitoso Outlast.",
      informacion: "Desarrollador: Red Barrels | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/414700/Outlast_2/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/outlast-2/BZVPNM21TCJC",
      },
    },
    {
      id:45,
      titulo: "Outlast",
      imagen: "https://image.api.playstation.com/cdn/UP2113/CUSA00325_00/M7Xcn9Q7mUkmm3dSilcsbkORlPPiQ0VK.png",
      descripcion: "Adéntrate en el manicomio de Mount Massive y descubre horrores inimaginables en este juego de terror psicológico.",
      informacion: "Desarrollador: Red Barrels | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/238320/Outlast/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/outlast/BP3GH4D3HP2H",
      },
    },
    {
      id:46,
      titulo: "Five Nights at Freddy's",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/319510/header.jpg?t=1666889251",
      descripcion: "Enfréntate a terroríficos animatronics mientras trabajas como guardia de seguridad nocturno en Freddy Fazbear's Pizza.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 2014",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/five-nights-at-freddys/9N5253J559LR",
      },
    },
    {
      id:47,
      titulo: "Five Nights at Freddy's 2",
      imagen: "https://cdn-www.bluestacks.com/bs-images/com.scottgames.fnaf2_.jpg",
      descripcion: "Vuelve a la aterradora pizzería, esta vez con nuevos animatronics y más peligros en tu turno nocturno.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 2014",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/332800/Five_Nights_at_Freddys_2/?l=spanish",
        plataforma2: "https://www.xbox.com/es-EC/games/store/five-nights-at-freddys-2/9nbr2zsd99fx",
      },
    },
    {
      id:48,
      titulo: "Five Nights at Freddy's 3",
      imagen: "https://assetsio.reedpopcdn.com/co6fyk.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      descripcion: "Explora una nueva ubicación con un horror renovado mientras enfrentas a Springtrap y otros peligros.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 2015",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/354140/Five_Nights_at_Freddys_3/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/five-nights-at-freddys-3/9P6N7LQ4HZFD",
      },
    },
    {
      id:49,
      titulo: "Five Nights at Freddy's 4",
      imagen: "https://image.api.playstation.com/vulcan/img/cfn/11307lJXV6jMrabrKwzNFK94riCQC90Ogs2z0X1LWyX9oDA0W1zmbIw3V-eLTiw-q-kW_7MfwoEOQH-ZEVPPuRX1gDM0TYhw.png",
      descripcion: "Sumérgete en el terror en la habitación de un niño mientras te enfrentas a los animatronics en este juego de la serie FNaF.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 2015",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/388090/Five_Nights_at_Freddys_4/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/five-nights-at-freddys-4/9pldlmplr7jv",
      },
    },
    {
      id:50,
      titulo: "Five Nights at Freddy's: Sister Location",
      imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b5a3564a-b113-4f9e-b5e5-386108005e7a/dcknqhp-6ae238ee-736a-4527-bebe-4eaed9db3d1b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I1YTM1NjRhLWIxMTMtNGY5ZS1iNWU1LTM4NjEwODAwNWU3YVwvZGNrbnFocC02YWUyMzhlZS03MzZhLTQ1MjctYmViZS00ZWFlZDlkYjNkMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GdZGknzPMkDRUFIoxLSLdd6Y4tHA-F48nkxezHOqBuo",
      descripcion: "Trabaja en Circus Baby's Pizza World y enfrenta nuevos desafíos y personajes en esta entrega de la serie.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 2016",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/506610/Five_Nights_at_Freddys_Sister_Location/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/five-nights-at-freddys-sister-location/9ndh606jxlwj",
      },
    },
    {
      id:51,
      titulo: "Freddy Fazbear's Pizzeria Simulator",
      imagen: "https://store-images.s-microsoft.com/image/apps.59889.13682780537640100.576cf9e6-eb8e-4a72-84ca-3f229c8fab47.e6e1dfd5-3a47-4689-be49-ebd619fc1fa9?q=90&w=480&h=270",
      descripcion: "Administra tu propia pizzería y descubre los oscuros secretos que se esconden detrás de esta simulación inesperada.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/738060/Freddy_Fazbears_Pizzeria_Simulator/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/freddy-fazbears-pizzeria-simulator/9NJ5VQGQH7K1",
      },
    },
    {
      id:52,
      titulo: "Five Nights at Freddy's: Help Wanted",
      imagen: "https://image.api.playstation.com/cdn/UP0638/CUSA15930_00/wMD21HRlZLFIPRQd4pqkIwHGJ2Broq41.png",
      descripcion: "Experimenta los eventos de los juegos anteriores y más en realidad virtual mientras te enfrentas a los sustos de FNaF.",
      informacion: "Desarrollador: Steel Wool Studios | Lanzamiento: 2019",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/732690/FIVE_NIGHTS_AT_FREDDYS_HELP_WANTED/?l=spanish",
        plataforma2: "https://www.xbox.com/es-ar/games/store/five-nights-at-freddys-help-wanted/9p731fvpm8ww",
      },
    },
    {
      id:53,
      titulo: "Five Nights at Freddy's World",
      imagen: "https://tr.rbxcdn.com/783497390a64eddf3461b04d8ce83b40/500/280/Image/Jpeg",
      descripcion: "Embárcate en una aventura única en un mundo de fantasía con los personajes de FNaF en este juego de rol.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 2016",
      enlaces: {
        plataforma1: "https://steamcommunity.com/app/427920?l=spanish",
        plataforma2: "https://world.es.aptoide.com/app",
      },
    },
    {
      id:54,
      titulo: "Five Nights at Freddy's: Delivery",
      imagen: "https://play-lh.googleusercontent.com/fFcYA0NvhDipw0Heblrnp1xvzJ6L9bEH1p004tj5qlhs_VNKi0rby6gnisxV8BY72w",
      descripcion: "Participa en la entrega de pizzas y enfréntate a nuevos desafíos mientras interactúas con los animatronics.",
      informacion: "Desarrollador: Scott Cawthon | Lanzamiento: 209",
      enlaces: {
        plataforma1: "https://special-delivery-illumix-inc.es.aptoide.com/app",
        plataforma2: "https://play.google.com/store/apps/details?id=com.illumix.fnafar&hl=es&gl=US&pli=1",
      },
    },
    {
      id:55,
      titulo: "Five Nights at Freddy's: Security Breach",
      imagen: "https://image.api.playstation.com/vulcan/img/rnd/202112/0804/2UTMvRFqn4SdaoxhtQnxchcn.png",
      descripcion: "Explora un centro comercial y enfrenta nuevos peligros en este capítulo de la serie FNaF.",
      informacion: "Desarrollador: Steel Wool Studios | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/747660/Five_Nights_at_Freddys_Security_Breach/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/five-nights-at-freddys-security-breach/9NMP8KFRTNCD",
      },
    },
    {
      id:56,
      titulo: "Far Cry New Dawn",
      imagen: "https://assets1.ignimgs.com/2018/12/13/far-cry-new-dawn---button-01-1544669840459.jpg",
      descripcion: "Far Cry New Dawn es un juego de acción y aventuras...",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2019",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/far-cry/new-dawn",
        plataforma2: "https://store.steampowered.com/agecheck/app/939960/",
      },
    },
    {
      id:57,
      titulo: "Volcanoids",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/951440/header.jpg?t=1697745789",
      descripcion: "Volcanoids es un juego de supervivencia en un mundo volcánico...",
      informacion: "Desarrollador: Volcanoid | Lanzamiento: 2019",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/951440/Volcanoids/",
        plataforma2: "https://www.3djuegos.com/juegos/volcanoids/",
      },
    },
    {
      id:58,
      titulo: "Among Us",
      imagen: "https://acf.geeknetic.es/imagenes/auto/20/09/22/4l3-2qm-muestra.jpg",
      descripcion: "Among Us es un juego multijugador en línea de traición y supervivencia...",
      informacion: "Desarrollador: InnerSloth | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.epicgames.com/es-ES/p/among-us",
        plataforma2: "https://store.steampowered.com/app/945360/Among_Us/?l=spanish",
      },
    },
    {
      id:59,
      titulo: "Celeste",
      imagen: "https://images7.alphacoders.com/901/thumb-1920-901149.png",
      descripcion: "Celeste es un juego de plataformas con énfasis en la narrativa...",
      informacion: "Desarrollador: Maddy Makes Games | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/504230/Celeste/?l=spanish",
        plataforma2: "https://www.xbox.com/es-CL/games/store/celeste/bwmql2rpwbhb",
      },
    },
    {
      id:60,
      titulo: "Euro Truck Simulator 2",
      imagen: "https://static.wixstatic.com/media/a27d24_c04de4cbacd64e579d2b2ed614f12aa8~mv2.jpg/v1/fill/w_616,h_353,al_c,q_80,enc_auto/a27d24_c04de4cbacd64e579d2b2ed614f12aa8~mv2.jpg",
      descripcion: "Euro Truck Simulator 2 simula la experiencia de ser un conductor de camiones...",
      informacion: "Desarrollador: SCS Software | Lanzamiento: 2012",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/?l=spanish",
        plataforma2: "https://listado.mercadolibre.com.ar/euro-truck-simulator-2-juegos-pc-simuladores?matt_tool=33640157&matt_word=&matt_source=google&matt_campaign_id=1682773901&matt_ad_group_id=65529317276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=621358220074&matt_keyword=&matt_ad_position=&matt_ad_type=&matt_merchant_id=&matt_product_id=&matt_product_partition_id=&matt_target_id=dsa-41621745636&gad_source=1&gclid=CjwKCAiA04arBhAkEiwAuNOsInc6ypYuT5iAywHc0mf7d8R1h71BsYSnZFiVp-7eAzs2p9Ag4MiJAxoC67oQAvD_BwE",
      },
    },
    {
      id:61, 
      titulo: "Pac-Man",
      imagen: "https://e.rpp-noticias.io/xlarge/2022/05/19/320032_1261424.jpg",
      descripcion: "Pac-Man es un clásico juego de arcade donde el jugador controla a Pac-Man...",
      informacion: "Desarrollador: Namco | Lanzamiento: 1980",
      enlaces: {
        plataforma1: "https://www.xbox.com/es-AR/games/store/pac-man/9NRTCBH81JRQ",
        plataforma2: "N_WORLD_RePAC/?l=latam",
      },
    },
    {
      id:62,
      titulo: "Apex Legends",
      imagen: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
      descripcion: "Apex Legends es un juego de disparos estilo battle royale...",
      informacion: "Desarrollador: Respawn Entertainment | Lanzamiento: 2019",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1172470/Apex_Legends/?l=latam",
        plataforma2: "https://www.ea.com/es-mx/games/apex-legends",
      },
    },
    {
      id:63,
      titulo: "The Forest",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/capsule_616x353.jpg?t=1699381053",
      descripcion: "The Forest es un juego de supervivencia en un entorno boscoso...",
      informacion: "Desarrollador: Endnight Games | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/242760/?l=spanish",
        plataforma2: "https://store.epicgames.com/es-ES/p/forest-quartet-5d03e3",
      },
    },
    {
      id:64, 
      titulo: "Sons of the Forest",
      imagen: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/01/sons-of-the-forest-promo.jpeg",
      descripcion: "Sons of the Forest es la secuela de The Forest, continuando la historia...",
      informacion: "Desarrollador: Endnight Games | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/",
        plataforma2: "https://es.wikipedia.org/wiki/Sons_of_the_Forest",
      },
    },
    {
      id:65,
      titulo: "Cyberpunk 2077",
      imagen: "https://sm.ign.com/ign_es/game/c/cyberpunk-/cyberpunk-2077_ygyu.jpg",
      descripcion: "Cyberpunk 2077 es un juego de rol de acción en un mundo abierto futurista...",
      informacion: "Desarrollador: CD Projekt | Lanzamiento: 2020",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1091500/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/cyberpunk-2077/BX3M8L83BBRW/0001",
      },
    },
    {
      id:66,
      titulo: "Red Dead Redemption 2",
      imagen: "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png",
      descripcion: "Red Dead Redemption 2 es un juego de acción y aventuras en un entorno del Lejano Oeste...",
      informacion: "Desarrollador: Rockstar Games | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://www.rockstargames.com/es/reddeadredemption2",
        plataforma2: "https://www.xbox.com/es-AR/games/store/red-dead-redemption-2/9N2ZDN7NWQKV",
      },
    },
    {
      id:67,
      titulo: "The Last of Us",
      imagen: "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-keyart-01-en-18may22?$facebook$",
      descripcion: "The Last of Us es un juego de acción y aventuras que sigue la historia de Joel y Ellie...",
      informacion: "Desarrollador: Naughty Dog | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1888930/?l=latam",
        plataforma2: "https://www.playstation.com/es-ar/games/the-last-of-us-part-i/",
      },
    },
    {
      id:68,
      titulo: "Spider-Man Remastered",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png",
      descripcion: "Spider-Man es un juego de acción basado en el icónico superhéroe de Marvel...",
      informacion: "Desarrollador: Insomniac Games | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://www.playstation.com/es-ar/games/marvels-spider-man-remastered/",
        plataforma2: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/?l=spanish",
      },
    },
    {
      id:69,
      titulo: "Sekiro: Shadows Die Twice",
      imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png",
      descripcion: "Sekiro: Shadows Die Twice es un juego de acción y aventuras con énfasis en el combate...",
      informacion: "Desarrollador: FromSoftware | Lanzamiento: 2019",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/814380/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/sekiro-shadows-die-twice-edicion-juego-del-ano/BQD5WRRP2D6Q",
      },
    },
    {
      id:70,
      titulo: "Dead Space Remake",
      imagen: "https://i.blogs.es/e0e9bf/1277778/1366_2000.jpeg",
      descripcion: "Dead Space es un juego de terror y ciencia ficción que sigue a Isaac Clarke...",
      informacion: "Desarrollador: EA Redwood Shores | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1693980/",
        plataforma2: "https://www.xbox.com/es-ES/games/store/dead-space/9NLB6V0GNC9P",
      },
    },
    {
      id:71,
      titulo: "Hogwarts Legacy",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png",
      descripcion: "Hogwarts Legacy es un juego de rol de acción ambientado en el mundo de Harry Potter...",
      informacion: "Desarrollador: Portkey Games | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=spanish",
        plataforma2: "https://store.epicgames.com/es-ES/p/hogwarts-legacy",
      },
    },
    {
      id:72,
      titulo: "Party Animals",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1260320/capsule_616x353.jpg?t=1700573729",
      descripcion: "Party Animals es un juego multijugador en el que los jugadores controlan animales...",
      informacion: "Desarrollador: Recreate Games | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1260320/Party_Animals/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/party-animals",
      },
    },
    {
      id:73,
      titulo: "New World",
      imagen: "https://i.blogs.es/3373ae/newworld_keyart/1366_2000.jpeg",
      descripcion: "New World es un juego de rol en línea ambientado en un mundo sobrenatural...",
      informacion: "Desarrollador: Amazon Game Studios | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1063730/New_World/?l=latam",
        plataforma2: "https://www.newworld.com/es-mx/",
      },
    },
    {
      id:74,
      titulo: "Portal",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/400/capsule_616x353.jpg?t=1699003695",
      descripcion: "Portal es un juego de rompecabezas en primera persona que desafía las leyes de la física...",
      informacion: "Desarrollador: Valve | Lanzamiento: 2007",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/400/Portal/?l=spanish",
        plataforma2: "https://es.wikipedia.org/wiki/Portal_(videojuego)",
      },
    },
    {
      id:75,
      titulo: "Portal 2",
      imagen: "https://assetsio.reedpopcdn.com/co1rs4.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      descripcion: "Portal 2 es la secuela del juego de rompecabezas en primera persona Portal...",
      informacion: "Desarrollador: Valve | Lanzamiento: 2011",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/620/Portal_2/?l=spanish",
        plataforma2: "https://www.xbox.com/es-CO/games/store/portal-2/bt2b17v20d1p",
      },
    },
    {
      id:76, 
      titulo: "Fallout 4",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2502/rB3GRFvdPmaALiGt89ysflQ4.jpg",
      descripcion: "Fallout 4 es un juego de rol de acción en un mundo abierto postapocalíptico...",
      informacion: "Desarrollador: Bethesda Game Studios | Lanzamiento: 2015",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/377160/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/fallout-4/C3KLDKZBHNCZ",
      },
    },
    {
      id:77,
      titulo: "Fallout 3",
      imagen: "https://store-images.s-microsoft.com/image/apps.43444.13574127358458005.65070c14-0cf2-44ab-b4fc-c66107fdb092.5acef951-2322-424c-93ad-6bfc679a27ef?q=90&w=480&h=270",
      descripcion: "Fallout 3 es un juego de rol de acción ambientado en un mundo postapocalíptico...",
      informacion: "Desarrollador: Bethesda Game Studios | Lanzamiento: 2008",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/22300/?l=spanish",
        plataforma2: "https://store.epicgames.com/es-ES/p/fallout-3-game-of-the-year-edition",
      },
    },
    {
      id:78,
      titulo: "Fallout 76",
      imagen: "https://irrompibles.net/irrwp/wp-content/uploads/2018/12/images_2018_informes_fallout-76_fallout-76-review.jpg",
      descripcion: "Fallout 76 es un juego de rol en línea ambientado en el universo postapocalíptico de Fallout...",
      informacion: "Desarrollador: Bethesda Game Studios | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1151340/?l=latam",
        plataforma2: "https://www.xbox.com/es-AR/games/store/fallout-76-pc/9nkgnmnk3k3z",
      },
    },
    {
      id:79,
      titulo: "A Way Out",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222700/capsule_616x353.jpg?t=1626878628",
      descripcion: "A Way Out es un juego de acción y aventuras cooperativo en pantalla dividida...",
      informacion: "Desarrollador: Hazelight Studios | Lanzamiento: 2018",
      enlaces: {
        plataforma1: "https://www.ea.com/es-es/games/a-way-out",
        plataforma2: "https://store.steampowered.com/app/1222700/A_Way_Out/?l=spanish",
      },
    },
    {
      id:80,
      titulo: "Dark Souls 3",
      imagen: "https://www.mundodeportivo.com/alfabeta/hero/2022/03/Dark-Souls-III.jpg?width=1200",
      descripcion: "Dark Souls 3 es un juego de rol de acción con un desafiante combate...",
      informacion: "Desarrollador: FromSoftware | Lanzamiento: 2016",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/374320/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/dark-souls-iii/bw2xdrnsccpz",
      },
    },
    {
      id:81,
      titulo: "No Man's Sky",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202308/2413/5c214b6568870e2f036270f0e8528048563f9a9929d138de.png",
      descripcion: "No Man's Sky es un juego de exploración espacial que permite a los jugadores explorar un universo infinito...",
      informacion: "Desarrollador: Hello Games | Lanzamiento: 2016",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/275850/No_Mans_Sky/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/no-mans-sky/BQVQTL3PCH05",
      },
    },
    {
      id:82,
      titulo: "Outer Wilds",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1623/Zofebh60Ue7Zt5sC10UAtU3D.png",
      descripcion: "Outer Wilds es un juego de aventuras en un mundo abierto donde los jugadores exploran un sistema solar en constante evolución...",
      informacion: "Desarrollador: Mobius Digital | Lanzamiento: 2019",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/753640/Outer_Wilds/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/outer-wilds/c596fkdkmqn7",
      },
    },
    {
      id:83,
      titulo: "UltraKill",
      imagen: "https://images.gog-statics.com/54878b7e9d8a40fd4d88e9f02bdb8005c8b5cf31c07475e1e9511e552b9c9bc6.jpg",
      descripcion: "Ultra Kill es un juego de disparos en primera persona de estilo retro con acción rápida...",
      informacion: "Desarrollador: Arsi Hakita Patala | Lanzamiento: 2020",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1229490/ULTRAKILL/?l=spanish",
        plataforma2: "https://hakita.itch.io/ultrakill-prelude",
      },
    },
    {
      id:84, 
      titulo: "Watch Dogs 2",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28lSq4QvYNayFgXDyKNy8AtAcX1X4PTWt9ySaKxwm8Jwv92E9bk_CZb0IXDDthFFr12c&usqp=CAU",
      descripcion: "Watch Dogs 2 es un juego de acción y aventuras en mundo abierto donde los jugadores asumen el papel de un hacker...",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2016",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/447040/",
        plataforma2: "https://store.ubisoft.com/es/watch_dogs-2---gold-edition/574d3e9a0c8ee4c65d8b4567.html",
      },
    },
    {
      id:85,
      titulo: "Watch Dogs",
      imagen: "https://upload.wikimedia.org/wikipedia/en/d/d9/Watch_Dogs_box_art.jpg",
      descripcion: "Watch Dogs es un juego de acción en mundo abierto que sigue a Aiden Pearce, un hábil hacker...",
      informacion: "Desarrollador: Ubisoft | Lanzamiento: 2014",
      enlaces: {
        plataforma1: "https://www.ubisoft.com/es-mx/game/watch-dogs/watch-dogs",
        plataforma2: "https://store.steampowered.com/agecheck/app/243470/",
      },
    },
    {
      id:86,
      titulo: "Play With Trini",
      imagen: "https://w7.pngwing.com/pngs/588/623/png-transparent-question-mark-information-others-3d-computer-graphics-desktop-wallpaper-question.png",
      descripcion: "Juego de terror, en el que deberas de sobrevivir a Trini, el arruina sueños.",
      informacion: "Desarrollador: Trini | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://media.istockphoto.com/id/1334434982/es/foto/fantasma-aterrador-sobre-fondo-oscuro.jpg?s=612x612&w=0&k=20&c=GKJSU3NnvYt0G0m0pv6_PZHn47RL9zkUDHcNFkybPgM=",
        plataforma2: "https://i.pinimg.com/236x/2e/88/61/2e8861f761a683e5d3fc0878e3b5f3a3.jpg",
      },
    },
    {
      id:87,
      titulo: "Suicide Squad: Kill the Justice League",
      imagen: "https://www.mundodeportivo.com/alfabeta/hero/2023/02/suicide-squad-kill-the-justice-league.webp?width=768&aspect_ratio=16:9&format=nowebp",
      descripcion: "Suicide Squad: Kill the Justice League es un juego de acción en el que los jugadores asumen el papel de los miembros del Escuadrón Suicida, enfrentándose a amenazas imparables en el universo de DC Comics...",
      informacion: "Desarrollador: Rocksteady Studios | Lanzamiento: 2024",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/315210/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/suicide-squad-kill-the-justice-league",
      },
    },
    {
      id:88,
      titulo: "Voidtrain",
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1159690/capsule_616x353.jpg?t=1688716761",
      descripcion: "Voidtrain es un juego de aventuras en el que los jugadores exploran un mundo surrealista a bordo de un tren interdimensional. Deberán enfrentarse a criaturas y desafíos mientras mejoran su tren y descubren los secretos del vacío...",
      informacion: "Desarrollador: Nearga | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1159690/Voidtrain/",
        plataforma2: "https://store.epicgames.com/es-ES/p/voidtrain",
      },
    },
    {
      id:89,
      titulo: "Viewfinder",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1382070/capsule_616x353.jpg?t=1689778381",
      descripcion: "Viewfinder es un juego de puzles y exploración en primera persona donde los jugadores deben resolver acertijos y descubrir misterios en un mundo virtual...",
      informacion: "Desarrollador: Sad Owl Studios | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1382070/Viewfinder/",
        plataforma2: "https://www.playstation.com/es-ar/games/viewfinder/",
      },
    },
    {
      id:90,
      titulo: "Diablo IV",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0522/B9YuXUOWOVixhpLYgGAZX9BU.jpg",
      descripcion: "Diablo IV es la próxima entrega de la icónica serie de juegos de rol de acción. Los jugadores explorarán el mundo de Santuario, enfrentándose a demonios y descubriendo la verdad detrás de oscuros misterios...",
      informacion: "Desarrollador: Blizzard Entertainment | Lanzamiento: 2023",
      enlaces: {
        plataforma1: "https://us.shop.battle.net/es-es/product/diablo-iv",
        plataforma2: "https://store.steampowered.com/agecheck/app/2344520/",
      },
    },
    {
      id:91,
      titulo: "It Takes Two",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/7CRynuLSAb0vysSC4TmZy5e4.png",
      descripcion: "It Takes Two es un juego de aventuras cooperativo en el que dos jugadores asumen los roles de pequeñas figuras antropomórficas. Juntos, deben superar desafíos y resolver puzles para restaurar la relación de una pareja...",
      informacion: "Desarrollador: Hazelight Studios | Lanzamiento: 2021",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/1426210/It_Takes_Two/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/it-takes-two-version-digital/9nxvc0482qs5",
      },
    },
    {
      id:92,
      titulo: "Elden Ring",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
      descripcion: "Elden Ring es un juego de acción y rol en un mundo de fantasía creado en colaboración entre el escritor George R. R. Martin y el desarrollador de videojuegos Hidetaka Miyazaki. Los jugadores explorarán un vasto mundo lleno de misterios y desafíos...",
      informacion: "Desarrollador: FromSoftware | Lanzamiento: 2022",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/1245620/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/elden-ring/9P3J32CTXLRZ/0010",
      },
    },
    {
      id:93,
      titulo: "Batman: Arkham Knight",
      imagen: "https://image.api.playstation.com/cdn/UP1018/CUSA00133_00/due3Vp0T2VSGfBtGsWjVnrL4o882iYVk.png",
      descripcion: "Batman: Arkham Knight es un juego de acción y aventuras en el que los jugadores asumen el papel de Batman, enfrentándose al Espantapájaros y otros villanos icónicos de Gotham City. Con el Batmóvil, explorarán la ciudad y resolverán misterios...",
      informacion: "Desarrollador: Rocksteady Studios | Lanzamiento: 2015",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/208650/",
        plataforma2: "https://www.xbox.com/es-AR/games/store/batman-arkham-knight/bslx1rnxr6h7",
      },
    },
    {
      id:94,
      titulo: "Batman: Arkham Origins",
      imagen: "https://images.greenmangaming.com/72fcfa39d0b04707b58f7f41633a16ad/580ffd7c93ba44c4b2e32793ebab150e.jpg",
      descripcion: "Batman: Arkham Origins es un juego de acción y aventuras que sirve como precuela de la serie Arkham. Los jugadores experimentarán los primeros días de Batman mientras se enfrenta a una serie de villanos por primera vez...",
      informacion: "Desarrollador: WB Games Montreal | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://store.steampowered.com/agecheck/app/209000/?l=spanish",
        plataforma2: "https://marketplace.xbox.com/es-AR/Product/Batman-Arkham-Origins/66acd000-77fe-1000-9115-d80257520828",
      },
    },
    {
      id:95,
      titulo: "LEGO Marvel Super Heroes 2",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/647830/capsule_616x353.jpg?t=1635187803",
      descripcion: "LEGO Marvel Super Heroes 2 es un juego de acción y aventuras que presenta a los personajes del universo Marvel en un mundo de bloques LEGO. Los jugadores viajarán a través del tiempo y el espacio para derrotar al malvado viajero temporal Kang el Conquistador...",
      informacion: "Desarrollador: TT Games | Lanzamiento: 2017",
      enlaces: {
        plataforma1: "https://www.xbox.com/es-AR/games/store/lego-marvel-super-heroes-2-edicion-deluxe/C4BTWD7XQ91P",
        plataforma2: "https://store.steampowered.com/app/647830/LEGO_Marvel_Super_Heroes_2/?l=spanish",
      },
    },
    {
      id:96,
      titulo: "LEGO Star Wars: The Skywalker Saga",
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202112/2121/qrpfY71rsvMn6beyjgStw3cH.png",
      descripcion: "LEGO Star Wars: The Skywalker Saga es un juego de acción y aventuras que abarca las nueve películas principales de la saga de Star Wars. Los jugadores pueden explorar galaxias, completar misiones y experimentar la historia de una manera divertida y humorística...",
      informacion: "Desarrollador: TT Games | Lanzamiento: 2022",
      enlaces: {
        plataforma1: "https://www.xbox.com/es-AR/games/lego-star-wars-the-skywalker-saga",
        plataforma2: "https://store.steampowered.com/app/32440/LEGO_Star_Wars__The_Complete_Saga/?l=spanish",
      },
    },
    {
      id:97,
      titulo: "LEGO Batman 3: Beyond Gotham",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/313690/capsule_616x353.jpg?t=1573510385",
      descripcion: "LEGO Batman 3: Beyond Gotham es un juego de acción y aventuras en el que los jugadores asumen el papel de los héroes de DC Comics, incluido Batman, mientras se embarcan en una misión cósmica para detener a Brainiac de destruir la Tierra...",
      informacion: "Desarrollador: TT Games | Lanzamiento: 2014",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/313690/LEGO_Batman_3_Beyond_Gotham/?l=spanish",
        plataforma2: "https://www.xbox.com/es-AR/games/store/lego-batman-3-mas-alla-de-gotham-edicion-deluxe/C4HFHZ44Z3R3",
      },
    },
    {
      id:98,
      titulo: "LEGO Indiana Jones: The Original Adventures",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/32330/header.jpg?t=1699055876",
      descripcion: "LEGO Indiana Jones: The Original Adventures es un juego de acción y aventuras que sigue las historias de las tres primeras películas de Indiana Jones. Los jugadores resolverán puzles, lucharán contra enemigos y explorarán entornos llenos de bloques LEGO...",
      informacion: "Desarrollador: Traveller's Tales | Lanzamiento: 2008",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/32330/LEGO_Indiana_Jones_The_Original_Adventures/?l=spanish",
        plataforma2: "https://www.xbox.com/es-MX/games/store/lego-indiana-jones-la-trilogia-original/BPFXMQVLHFV4",
      },
    },
    {
      id:99,
      titulo: "Dota 2",
      imagen: "https://www.hd-tecnologia.com/imagenes/articulos/2023/06/Dota-2-abandona-su-Battle-Pass-y-se-enfocara-en-grandes-actualizaciones-con-mucho-contenido.jpg",
      descripcion: "Dota 2 es un juego de estrategia en tiempo real (MOBA) donde dos equipos compiten para destruir el antiguo del equipo contrario. Cada jugador elige un héroe con habilidades únicas y trabaja en equipo para lograr la victoria...",
      informacion: "Desarrollador: Valve | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/570/Dota_2/",
        plataforma2: "https://www.dota2.com/home",
      },
    },
    {
      id:100,
      titulo: "Terraria",
      imagen: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860",
      descripcion: "Terraria es un juego de aventuras y construcción en 2D donde los jugadores exploran, construyen y luchan en un mundo generado aleatoriamente. Con una variedad de enemigos y objetos, los jugadores tienen libertad para crear su propia aventura...",
      informacion: "Desarrollador: Re-Logic | Lanzamiento: 2011",
      enlaces: {
        plataforma1: "https://store.steampowered.com/app/105600/Terraria/?l=spanish",
        plataforma2: "https://www.xbox.com/es-CL/games/store/terraria/btnps60n3114",
      },
    },

    // Agrega más juegos según sea necesario
  ];

  const actualizadosJuegos = [...juegos];

  // ... (código existente)
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredJuegos = juegos.filter((juego) =>
    juego.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fondoStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  };
  return (
    <div className="juegos-container">
        <div className="search-bar">
        <input
        type="text"
        placeholder="🔎 Buscar juegos"
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      <div className="juegos">
        <div className="juego-list">
          {filteredJuegos.map((juego, index) => (
            <div
              key={index}
              className="juego-card" style={fondoStyle}
              onClick={() => openGameDetails(juego)}
            >
              <img src={juego.imagen} alt={juego.titulo} />
              <p>{juego.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Juegos;