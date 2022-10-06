import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
	query users {
		users {
			_id
			username
			email
			pets {
				_id
				petName
				petBio
				petPic
				petAge
				personalityTraits
				breed
				petGender
				favActivity
			}
			gender
		}
	}
`;

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			pets {
				petName
				petBio
				petPic
				petAge
				personalityTraits
				breed
				petGender
				favActivity
			}
			friends {
				_id
				username
			}
			age
			gender
		}
	}
`;

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			pets {
				petName
				petBio
				petPic
				petAge
				personalityTraits
				breed
				petGender
				favActivity
			}
			friends {
				_id
				username
			}
			age
			gender
		}
	}
`;

export const QUERY_ME_BASIC = gql`
	{
		me {
			_id
			username
			email
			friends {
				_id
				username
			}
		}
	}
`;

export const GET_MESSAGES = gql`
	subscription {
		messages {
			id
			username
			message
		}
	}
`;
