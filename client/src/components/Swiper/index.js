import React from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";


const People = [
	{
		name: "Richard Hendricks",
		image: "https://swiperjs.com/demos/images/nature-9.jpg",
	},
	{
		name: "Erlich Bachman",
		image: "https://swiperjs.com/demos/images/nature-8.jpg",
	},
	{
		name: "Monica Hall",
		image: "https://swiperjs.com/demos/images/nature-10.jpg",
	},
	{
		name: "Jared Dunn",
		image: "https://swiperjs.com/demos/images/nature-6.jpg",
	},
	{
		name: "Dinesh Chugtai",
		image: "https://swiperjs.com/demos/images/nature-7.jpg",
	},
];
const CardDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ImgDiv = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	margin-top: 19rem;
	width: 300px;
	height: 300px;
	background-size: cover;
`;
const Swiper = () => {
	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
		if (direction === 'left'){
			console.log("left")
		}
		else if (direction === 'right') {
			console.log("right")
		} else {
			console.log("swipe left or right")
		}
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + " left the screen");
	};
	return (
		<CardDiv>
			{People.map((person, index) => {
				return (
					<TinderCard
						key={index}
						className="swipe"
						onSwipe={onSwipe}
						onCardLeftScreen={() => onCardLeftScreen("fooBar")}
						preventSwipe={["up", "down"]}
					>
						<ImgDiv
							style={{ backgroundImage: `url(${person.image})` }}
							bg={person.image}
						>
							<h1
								style={{
									color: "white",
									position: "absolute",
									bottom: "0px",
									left: "5px",
									fontSize: "18px",
									fontWeight: "bold",
								}}
							>
								{person.name}
							</h1>
						</ImgDiv>
					</TinderCard>
				);
			})}
		</CardDiv>
	);
};
export default Swiper;
