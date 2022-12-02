import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private auth: Auth) {}
/* Creating a promise with a try to get a email and password */
	async register({ email, password }) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
/* If we catch an error, we will return "null" */
			return user;
		} catch (e) {
			return null;
		}
	}
/* Creating a promise with a try to get a email and password */
	async login({ email, password }) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
/* If we catch an error, we will return "null" */
			return user;
		} catch (e) {
			return null;
		}
	}

	logout() {
		return signOut(this.auth);
	}
}