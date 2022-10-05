import { gql } from "@apollo/client";

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			matchCount
			pets{
				petName
				petAge
				personalityTraits
				breed
				petGender
				favActivity
			}
			matches {
				_id
				username
			}
			age
			gender
			showMe
			city
			state
			occupation
			
		}
	}
`;

export const QUERY_ME = gql`
	{
		me {
			_id
			username
			email
			matchCount
			pets{
				petName
				petAge
				personalityTraits
				breed
				petGender
				favActivity
			}
			matches {
				_id
				username
			}
			age
			gender
			showMe
			city
			state
			occupation
		}
	}
`;

export const QUERY_ME_BASIC = gql`
	{
		me {
			_id
			username
			email
			matchCount
			matches {
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