import React from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { ADD_FRIEND } from "../../utils/mutations";
import {useQuery, useMutation} from "@apollo/client";
import {QUERY_USERS } from "../../utils/queries";
import { useParams } from "react-router-dom";
import './index.scss';
import Navbar from '../Navbar';

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

	const { username: userParam } = useParams();

	const { loading, data }= useQuery(QUERY_USERS);
	const People = data?.users || [];
	console.log(People);
	

	
	const [addFriend] = useMutation(ADD_FRIEND);
	const swipeRight = async () => {
		try {
			await addFriend({
				variables: { id: People._id },
			});
		} catch (e) {
			console.error(e);
		}
	};

	const onSwipe = (direction) => {
		console.log("You swiped: " + direction);
		if (direction === 'left'){
			console.log("left")
		}
		else if (direction === 'right') {
			console.log("yes");
		} else {
			console.log("swipe left or right")
		}
	};

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + " left the screen");
	};
	return (
		<>
			<Navbar/>
		<CardDiv>
			
			{People.map((person, index) => {
				console.log(person.pet[0].petName);
				return (
							
								<TinderCard
									key={index}
									className="swipe"
									onSwipe={onSwipe}
									onCardLeftScreen={() => onCardLeftScreen("Match")}
									preventSwipe={["up", "down"]}
								>
									<ImgDiv
										style={{ backgroundImage: `url(./images/${person.pet[0].petPic})` }}
										bg={person.pet[0].petName}
									>
										<div className="titleContainer">
										<h1
											className="cardTitle"
											style={{
												color: "black",
												position: "absolute",
												bottom: "0px",
												left: "5px",
												fontSize: "18px",
												fontWeight: "bold",
											}}
										>
											{person.pet[0].petName}
											</h1>
											</div>
									</ImgDiv>
								</TinderCard>
							);
						})}
			</CardDiv>
			</>
	);
};
export default Swiper;