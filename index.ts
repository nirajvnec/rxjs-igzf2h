import './style.css';
console.clear();

// begin lesson code
import { fromEvent } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete!'),
};

/*
 *  Create streams from events, given target and event name.
 */
const source$ = fromEvent(document, 'keydown');

/*
 *  Each subscription creates it's own execution path between
 *  observable and observer (also known as unicasting). So, in this case,
 *  every subscription will wire up a new event listener.
 */
const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
  /*
   *  For long running observables we need to make sure to clean
   *  them up when we are finished to prevent memory leaks and
   *  unintended behavior. In this case, we are cleaning up
   *  one subscription but not the other, leaving it active.
   *  We will learn different techniques to automate this
   *  process in an upcoming lesson.
   */
  console.log('unsubscribing');
  subOne.unsubscribe();
}, 3000);

/********************
 * Have a question, comment, or just want to chat about RxJS?
 * Ping me on Ultimate Courses slack or on
 * Twitter https://twitter.com/btroncone
 * I look forward to hearing from you!
 * For additional RxJS info and operator examples check out
 * Learn RxJS (https://www.learnrxjs.io) and
 * the Ultimate Course RxJS blog!
 * (https://ultimatecourses.com/blog/category/rxjs)
 ********************/
