import { db, Users, Participants, Reviews } from 'astro:db';

const admin_password = import.meta.env.ADMIN_PASSWORD || "admin";
export default async function seed() {
	await db.insert(Users).values([
		{ username: "admin", password: admin_password, profile_picture: 1, isAdmin: true },
	])
	await db.insert(Participants).values([
		{
		  id: 1,
		  turn: 1,
		  year: 2024,
		  country: "Ruotsi",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-SWEDEN-WHITE.png",
		  name: "Marcus & Martinus",
		  song: "Unforgettable",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/375f9a78-133d-409d-9204-e7ffb1c51654.jpg",
		  artist_url: "https://eurovision.tv/participant/marcus-martinus-2024"
		},
		{
		  id: 2,
		  turn: 2,
		  year: 2024,
		  country: "Ukraina",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-UKRAINE-WHITE.png",
		  name: "Alyona Alyona & Jerry Heil",
		  song: "Teresa & Maria",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-04/85467096-d8bf-45a4-96c4-5dceea4c7def.jpg",
		  artist_url: "https://eurovision.tv/participant/alyona-alyona-and-jerry-heil-2024"
		},
		{
		  id: 3,
		  turn: 3,
		  year: 2024,
		  country: "Saksa",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-GERMANY-WHITE.png",
		  name: "Isaak",
		  song: "Always On The Run",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/d92b4070-0922-4039-8d1e-cbec04048fe5.jpg",
		  artist_url: "https://eurovision.tv/participant/isaak-2024"
		},
		{
		  id: 4,
		  turn: 4,
		  year: 2024,
		  country: "Luxemburg",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-LUXEMBOURG-WHITE.png",
		  name: "Tali",
		  song: "Fighter",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/b3257b21-dd6d-4797-a69b-e7bde206db55.jpeg",
		  artist_url: "https://eurovision.tv/participant/tali-2024"
		},
		{
		  id: 5,
		  turn: 5,
		  year: 2024,
		  country: "Alankomaat",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-NETHERLANDS-WHITE.png",
		  name: "Joost Klein",
		  song: "Europapa",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/1.2_1.jpg",
		  artist_url: "https://eurovision.tv/participant/joost-klein-2024"
		},
		{
		  id: 6,
		  turn: 6,
		  year: 2024,
		  country: "Israel",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-ISRAEL-WHITE.png",
		  name: "Eden Golan",
		  song: "Hurricane",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/78f0cd32-90f6-4dc0-8cf8-323ba46b5617.jpeg",
		  artist_url: "https://eurovision.tv/participant/eden-golan-2024"
		},
		{
		  id: 7,
		  turn: 7,
		  year: 2024,
		  country: "Liettua",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-LITHUANIA-WHITE.png",
		  name: "Silvester Belt",
		  song: "Luktelk",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/7099fff6-411b-4c80-ad70-2610b2f529e7.jpg",
		  artist_url: "https://eurovision.tv/participant/silvester-belt-2024"
		},
		{
		  id: 8,
		  turn: 8,
		  year: 2024,
		  country: "Espanja",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-SPAIN-WHITE.png",
		  name: "Nebulossa",
		  song: "Zorra",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-02/nebu.jpeg",
		  artist_url: "https://eurovision.tv/participant/nebulossa-2024"
		},
		{
		  id: 9,
		  turn: 9,
		  year: 2024,
		  country: "Viro",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-ESTONIA-WHITE.png",
		  name: "5miinust X Puuluup",
		  song: "(Nendest) Narkootikumidest Ei Tea Me (K\u00fcll) Midagi",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/d460e990-c3c7-44bb-96d3-02118f6dcb7d.jpg",
		  artist_url: "https://eurovision.tv/participant/5miinust-and-puuluup-2024"
		},
		{
		  id: 10,
		  turn: 10,
		  year: 2024,
		  country: "Irlanti",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-IRELAND-WHITE.png",
		  name: "Bambie Thug",
		  song: "Doomsday Blue",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/c0408b44-073e-4df1-adbe-ebe30b042110.jpg",
		  artist_url: "https://eurovision.tv/participant/bambie-thug-2024"
		},
		{
		  id: 11,
		  turn: 11,
		  year: 2024,
		  country: "Latvia",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-LATVIA-WHITE.png",
		  name: "Dons",
		  song: "Hollow",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/aa4632a5-6613-459c-8351-9ed6719def2a.jpeg",
		  artist_url: "https://eurovision.tv/participant/dons-2024"
		},
		{
		  id: 12,
		  turn: 12,
		  year: 2024,
		  country: "Kreikka",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-GREECE-WHITE.png",
		  name: "Marina Satti",
		  song: "Zari",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/%CE%9C%CE%91%CE%A1%CE%99%CE%9D%CE%91-%CE%A3%CE%91%CE%A4%CE%A4%CE%99-1.jpg",
		  artist_url: "https://eurovision.tv/participant/marina-satti-2024"
		},
		{
		  id: 13,
		  turn: 13,
		  year: 2024,
		  country: "Englanti",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-UNITEDKINGDOM-WHITE.png",
		  name: "Olly Alexander",
		  song: "Dizzy",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2023-12/2023_OllyAlexander_Lead%20Image.jpg",
		  artist_url: "https://eurovision.tv/participant/olly-alexander-2024"
		},
		{
		  id: 14,
		  turn: 14,
		  year: 2024,
		  country: "Norja",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-NORWAY-WHITE.png",
		  name: "G\u00e5te",
		  song: "Ulveham",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-01/G%C3%A5te.jpg",
		  artist_url: "https://eurovision.tv/participant/gate-2024"
		},
		{
		  id: 15,
		  turn: 15,
		  year: 2024,
		  country: "Italia",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-ITALY-WHITE.png",
		  name: "Angelina Mango",
		  song: "La Noia",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/d4d74119-da30-4e7c-a6f1-730b61a8b718.jpg",
		  artist_url: "https://eurovision.tv/participant/angelina-mango-2024"
		},
		{
		  id: 16,
		  turn: 16,
		  year: 2024,
		  country: "Serbia",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-SERBIA-WHITE.png",
		  name: "Teya Dora",
		  song: "Ramonda",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/42855f59-20e9-4c94-93e4-085a74e66015.png",
		  artist_url: "https://eurovision.tv/participant/teya-dora-2024"
		},
		{
		  id: 17,
		  turn: 17,
		  year: 2024,
		  country: "Suomi",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-FINLAND-WHITE.png",
		  name: "Windows95man",
		  song: "No Rules!",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/a927ed5c-69d3-456b-99b0-fba85cd6b2a6_0.jpeg",
		  artist_url: "https://eurovision.tv/participant/windows95man-2024"
		},
		{
		  id: 18,
		  turn: 18,
		  year: 2024,
		  country: "Portugali",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-PORTUGAL-WHITE.png",
		  name: "Iolanda",
		  song: "Grito",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/FOTO_OFICIAL_iolanda.JPG",
		  artist_url: "https://eurovision.tv/participant/iolanda-2024"
		},
		{
		  id: 19,
		  turn: 19,
		  year: 2024,
		  country: "Armenia",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-ARMENIA-WHITE.png",
		  name: "Ladaniva",
		  song: "Jako",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-04/11bbfb28-2c2f-4d57-bbd6-2219653de68c.jpg",
		  artist_url: "https://eurovision.tv/participant/ladaniva-2024"
		},
		{
		  id: 20,
		  turn: 20,
		  year: 2024,
		  country: "Kypros",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-CYPRUS-WHITE.png",
		  name: "Silia Kapsis",
		  song: "Liar",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/6551ca38-88fe-49ca-9b1a-bbcf018fa7ea.jpeg",
		  artist_url: "https://eurovision.tv/participant/silia-kapsis-2024"
		},
		{
		  id: 21,
		  turn: 21,
		  year: 2024,
		  country: "Sveitsi",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-SWITZERLAND-WHITE.png",
		  name: "Nemo",
		  song: "The Code",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-02/Nemo_Cover_and_Press_1743-Edit.jpg",
		  artist_url: "https://eurovision.tv/participant/nemo-2024"
		},
		{
		  id: 22,
		  turn: 22,
		  year: 2024,
		  country: "Slovenia",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-SLOVENIA-WHITE.png",
		  name: "Raiven",
		  song: "Veronika",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-04/01713778-0e3f-4487-a839-7eeb5d5e505d.jpg",
		  artist_url: "https://eurovision.tv/participant/raiven-2024"
		},
		{
		  id: 23,
		  turn: 23,
		  year: 2024,
		  country: "Kroatia",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-CROATIA-WHITE.png",
		  name: "Baby Lasagna",
		  song: "Rim Tim Tagi Dim",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-04/a2363ecf-8c36-4d9a-a7de-4cfe2b480bb4.jpeg",
		  artist_url: "https://eurovision.tv/participant/baby-lasagna-2024"
		},
		{
		  id: 24,
		  turn: 24,
		  year: 2024,
		  country: "Georgia",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-GEORGIA-WHITE.png",
		  name: "Nutsa Buzaladze",
		  song: "Firefighter",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/41e382f4-2859-4faa-9e12-11d4d8788db2.jpg",
		  artist_url: "https://eurovision.tv/participant/nutsa-buzaladze-2024"
		},
		{
		  id: 25,
		  turn: 25,
		  year: 2024,
		  country: "Ranska",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-FRANCE-WHITE.png",
		  name: "Slimane",
		  song: "Mon Amour",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/422b352c-cda4-49e5-9acc-7edd24957b81.jpg",
		  artist_url: "https://eurovision.tv/participant/slimane-2024"
		},
		{
		  id: 26,
		  turn: 26,
		  year: 2024,
		  country: "Itävalta",
		  country_img: "https://eurovision.tv/sites/default/files/media/image/2023-08/ESC-HEART-AUSTRIA-WHITE.png",
		  name: "Kaleen",
		  song: "We Will Rave",
		  img: "https://eurovision.tv/sites/default/files/styles/teaser/public/media/image/2024-03/66a111f6-7be9-4880-8bfd-e583fdb91f83.jpg",
		  artist_url: "https://eurovision.tv/participant/kaleen-2024"
		}
	  ]
	)
}
