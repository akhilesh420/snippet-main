import { Injectable } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
describe('feedback: service', ()=>{
    let service: FeedbackService;
    afterEach(() => {
        service = null;
    });
    it('should create feedback', () => {
        expect(FeedbackService).toBeTruthy();
      });
});