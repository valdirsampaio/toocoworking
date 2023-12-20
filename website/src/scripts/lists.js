import banner3 from "../assets/banner3.jpg"
import banner8 from "../assets/banner8.jpg"
import banner5 from "../assets/banner5.jpg"
import servicos4 from "../assets/servicos4.png"
import { BsBuilding } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { PiOfficeChair } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { SiSecurityscorecard } from "react-icons/si";
import { IoCarSportOutline } from "react-icons/io5";
import reunioes1 from "../assets/salas/reunioes/1.jpg"
import reunioes2 from "../assets/salas/reunioes/2.jpg"
import reunioes3 from "../assets/salas/reunioes/3.jpeg"
import roomOne1 from "../assets/salas/sala1/1.jpg"
import roomOne2 from "../assets/salas/sala1/2.jpeg"
import roomOne3 from "../assets/salas/sala1/3.jpeg"
import roomTwo1 from "../assets/salas/sala2/1.png"
import roomTwo2 from "../assets/salas/sala2/2.jpeg"
import roomTwo3 from "../assets/salas/sala2/3.jpeg"
import roomThree1 from "../assets/salas/sala3/1.jpg"
import roomThree2 from "../assets/salas/sala3/2.jpg"
import roomThree3 from "../assets/salas/sala3/3.jpg"
import roomFour1 from "../assets/salas/sala4/1.jpg"
import roomFour2 from "../assets/salas/sala4/2.jpg"
import roomFour3 from "../assets/salas/sala4/3.jpeg"
import roomFour4 from "../assets/salas/sala4/4.jpeg"
import roomFive1 from "../assets/salas/sala5/1.jpg"
import roomFive2 from "../assets/salas/sala5/2.jpg"
import roomFive3 from "../assets/salas/sala5/3.jpg"
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPrint } from "react-icons/fa";
import { GrBike } from "react-icons/gr";
import { FaParking } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";


export const carouselList = [
    {
        "id": 1,
        "title": "Escritórios privativos",
        "image": banner3,
        "paragraph": "Os melhores espaços privativos com conforto e preço justo",
    },
    {
        "id": 2,
        "title": "Sala de reuniões",
        "image": banner8,
        "paragraph": "Privacidade e conforto para suas reuniões",
    },
    {
        "id": 3,
        "title": "Domicílio fiscal",
        "image": banner5,
        "paragraph": "Sua empresa com domicílio fiscal no melhor endereço de João Pessoa",
    },
    {
        "id": 4,
        "title": "Estacionamento gratuito",
        "image": servicos4,
        "paragraph": "São 9 andares de estacionamento gratuito para você e seus clientes!",
    },
]

export const servicesList = [
    {
        "id": 1,
        "title": "Endereço fiscal",
        "icon": BsBuilding,
    },
    {
        "id": 2,
        "title": "Salas de reuniões",
        "icon": SiGoogleclassroom,
    },
    {
        "id": 3,
        "title": "Escritórios privativos",
        "icon": PiOfficeChair,
    },
    {
        "id": 4,
        "title": "Espaços sofisticados",
        "icon": IoDiamondOutline,
    },
    {
        "id": 5,
        "title": "Recepção",
        "icon": SiSecurityscorecard,
    },
    {
        "id": 6,
        "title": "Estacionamento grátis",
        "icon": IoCarSportOutline,
    },
]

export const roomsList = [
    {
        "id": 0,
        "title": "Sala para reuniões",
        "images": [ reunioes1, reunioes2, reunioes3 ]
    },
    {
        "id": 1,
        "title": "Salas para 1",
        "images": [ roomOne1, roomOne2, roomOne3 ]
    },
    {
        "id": 2,
        "title": "Salas para 2",
        "images": [ roomTwo2, roomTwo1 , roomTwo3 ]
    },
    {
        "id": 3,
        "title": "Salas para 3",
        "images": [ roomThree1, roomThree2, roomThree3 ]
    },
    {
        "id": 4,
        "title": "Salas para 4",
        "images": [ roomFour1, roomFour2, roomFour3, roomFour4 ]
    },
    {
        "id": 5,
        "title": "Salas para 5",
        "images": [ roomFive1, roomFive2, roomFive3 ]
    },
]

export const commodityList = [
    {
        "id": 0,
        "title": "Espaço para reuniões de domingo a domingo",
        "icon": BsFillCalendarWeekFill,
    },
    {
        "id": 1,
        "title": "Condomínimo, energia e limpeza inclusos",
        "icon": FaMoneyBillWave,
    },
    {
        "id": 2,
        "title": "Cozinha/copa",
        "icon": GiForkKnifeSpoon,
    },
    {
        "id": 3,
        "title": "Café grátis",
        "icon": GiCoffeeCup,
    },
    {
        "id": 4,
        "title": "Sala de reuniões",
        "icon": FaPeopleGroup,
    },
    {
        "id": 5,
        "title": "Endereço comercial (para correspondência)",
        "icon": IoMdMail,
    },
    {
        "id": 6,
        "title": "Endereço fiscal",
        "icon": IoMdMail,
    },
    {
        "id": 7,
        "title": "Serviço de impressão",
        "icon": FaPrint,
    },
    {
        "id": 8,
        "title": "Bicicletário",
        "icon": GrBike,
    },
    {
        "id": 9,
        "title": "Estacionamento conveniado",
        "icon": FaParking,
    },
    {
        "id": 10,
        "title": "Estacionamento privado",
        "icon": FaParking,
    },
    {
        "id": 11,
        "title": "Atendimento em inglês",
        "icon": GiWorld,
    },
    {
        "id": 12,
        "title": "Escritórios mobiliados",
        "icon": FaRegClock,
    },
    {
        "id": 13,
        "title": "Internet de alta velocidade",
        "icon": FaWifi,
    },
    {
        "id": 14,
        "title": "Ar-condicionado",
        "icon": FaFan,
    },
    {
        "id": 15,
        "title": "Cadeiras ergonômicas",
        "icon": GiOfficeChair,
    },
]

export const review = [
    {
        "author_name": "Georgia Meneses",
        "author_url": "https://www.google.com/maps/contrib/109711005039007364888/reviews",
        "language": "pt",
        "original_language": "pt",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXb9b6ost71AajwlXyVVb1dYBwFzncTjk1NkVLaN54KhyA=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "um ano atrás",
        "text": "Local extremamente organizado e com uma ótima estrutura! Recebi um atendimento de qualidade! Recomendo",
        "time": 1669383677,
        "translated": false
    },
    {
        "author_name": "Julia P.",
        "author_url": "https://www.google.com/maps/contrib/111926436937008719709/reviews",
        "language": "pt",
        "original_language": "pt",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLrx9Y6CV2tM3Ma0iNo_G8bZ5zua7sQgoxWMVdZyShK=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "2 anos atrás",
        "text": "Ambiente moderno e limpo com localização excelente e estacionamento.\nAs vezes que utilizei para reunião ou estudos sempre superou minhas expectativas. Um local que posso focar nas metas que estabeleço sem me preocupar com interrupções externas. Voltarei em breve!",
        "time": 1624407550,
        "translated": false
    },
    {
        "author_name": "Rayra Vilar",
        "author_url": "https://www.google.com/maps/contrib/111911911933159480184/reviews",
        "language": "pt",
        "original_language": "pt",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWjVeRfvMcBQVxCSLQ7HQKkmOKS5EDfna24IA9qgNg0fTZ4=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "2 anos atrás",
        "text": "Excelente espaço para reuniões, com ótima estrutura,   e localização, confortável, organizado, agradável, elegante, bem equipado, limpeza impecável e preço justo... só elogios. Além disso, o proprietário é muito atencioso e sempre procurar aperfeiçoar mais e mais o espaço com cuidados e melhorias. Melhor coworking da cidade, perfeito para produtividade, reuniões, discussões de negócios e afins!",
        "time": 1624138327,
        "translated": false
    },
    {
        "author_name": "arôdo filho",
        "author_url": "https://www.google.com/maps/contrib/106519894969586231251/reviews",
        "language": "pt",
        "original_language": "pt",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWESfLljoQ8PuC27NXnkkdGbtsFJfrc0R7X3x2vGlwRUVM=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "2 anos atrás",
        "text": "Já usei diferentes espaços, estações de trabalho e salas privativas, todas mto limpas, silenciosas e com internet mto boa. O atendimento tbm foi ótimo e o preço justo! Vou voltar com ctz.",
        "time": 1628766679,
        "translated": false
    },
    {
        "author_name": "Maxwell Fernandes",
        "author_url": "https://www.google.com/maps/contrib/106711653648595155260/reviews",
        "language": "pt",
        "original_language": "pt",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjWo6fy1jvPtkExkr__h8UUsL2awLVMDKk3YwFs-I6I3tg=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "2 anos atrás",
        "text": "Ótimo para trabalhar e marcar reuniões. Ambiente limpo e organizado, além de bastante receptivo. Voltarei mais vezes!",
        "time": 1637760436,
        "translated": false
    }
]