// Juegos.js
import React, { useState } from "react";
import categorias from "./categorias";
import fondo from "./imagenes/imagen1.jpeg";


const Juegos = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (e) => {
    setShowSubMenu(!showSubMenu);
    setSelectedCategory(e.target.id);
    openGameDetails({titulo: e.target.value});
   };
  const subcategorias = {
    Acción: ["Aventura Acción", "Disparos", "Luchas"],
    Aventura: ["Aventura Gráfica", "Mundo Abierto"],
    Estrategia: ["Estrategia en Tiempo Real", "Estrategia por Turnos"],
    Deportes: ["Fútbol", "Baloncesto", "Automovilismo"],
    Rol: ["RPG de Acción", "RPG por Turnos"],
    Simulacion: ["Simulación de Vida", "Simulación de Negocios"],
    // Agrega más subcategorías según sea necesario
  };
  const openGameDetails = (juego) => {
    const nuevaPestana = window.open("", "_blank");
    nuevaPestana.document.write(`
      <h1>${juego.titulo}</h1>
      <img src="${juego.imagen}" alt="${juego.titulo}" />
      <p>${juego.descripcion}</p>
      <p>${juego.informacion}</p>
      <a href="${juego.enlaces.plataforma1}" target="_blank" rel="noopener noreferrer">Plataforma 1</a>
      <a href="${juego.enlaces.plataforma2}" target="_blank" rel="noopener noreferrer">Plataforma 2</a>
      <!-- Agrega más enlaces según sea necesario -->
    `);
    nuevaPestana.document.close();
  };
  


  const juegos = [
    {
      titulo: "Minecraft",
      imagen: "https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg",
      descripcion: "Es un videojuego tipo sandbox, su traducción literal sería “caja de arena” y es lo que representa la experiencia de juego. Los jugadores pueden modelar el mundo a su gusto, destruir y construir, como si estuviesen jugando en una caja de arena.",
      informacion: "Desarrollador: Mojang | Lanzamiento: 2011",
      enlaces: {
        plataforma1: "https://www.minecraft.net/",
        plataforma2: "https://www.microsoft.com/",
        // Agrega más enlaces según sea necesario
      },
    },
    {
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
      titulo: "GTA V",
      imagen: "https://image.api.playstation.com/cdn/UP1004/CUSA00419_00/bTNSe7ok8eFVGeQByA5qSzBQoKAAY32R.png",
      descripcion: "Explora el bullicioso mundo de Los Santos y participa en una variedad de actividades delictivas.",
      informacion: "Desarrollador: Rockstar North | Lanzamiento: 2013",
      enlaces: {
        plataforma1: "https://www.rockstargames.com/es/gta-v",
        plataforma2: "https://store.steampowered.com/agecheck/app/271590/?l=spanish",
      },
    },
    

    // Agrega más juegos según sea necesario
  ];

  const actualizadosJuegos = [...juegos];

  // ... (código existente)

  return (
    <div className="category-container">
      <div className="juegos">
        <h2>Juegos</h2>
        <div className="juego-list">
          {actualizadosJuegos.map((juego, index) => (
            <div
              key={index}
              className="juego-card"
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
