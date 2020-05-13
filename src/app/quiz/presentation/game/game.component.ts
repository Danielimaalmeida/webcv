import { Component, OnChanges, Input, ViewChildren, QueryList, ElementRef, Output, EventEmitter } from '@angular/core';
import { ICountry } from '../../api/entities/country.model';
import { ISingleQuestion } from './../../api/entities/country.model';

@Component({
  selector: 'da-game',
  templateUrl: './game.component.html',
  styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnChanges {
  @Output() tryAgainEmitter: EventEmitter<void> = new EventEmitter()
  @ViewChildren('answers') answers: QueryList<ElementRef>;
  @Input() language: any;
  @Input() countries: Array<ICountry>;
  gameQuestions: Array<ISingleQuestion> = [];
  currentQuestion: ICountry;
  currentQuestionIndex = 0;
  areAnswersBlocked: boolean;
  correctQuestions = 1;

  constructor() { }

  ngOnChanges(): void {
    if (this.countries && this.countries.length) {
      this.startGame();
    }
  }

  /**
   * Handles the option selection.
   *
   * If the user selected the correct answer, than element will be animated with green, for 5 seconds.
   * If the user selected a wrong answer, than the element will be animated with red, for 5 seconds. The correct answer is also highlighted;
   * @param selectedOption Selected Option object
   * @param index Selected Option index in the array
   */
  selectOption(selectedOption: ICountry, index: number): void {
    this.areAnswersBlocked = true;
    if (this.areAnswersBlocked) {
      this.answers.forEach((answer: ElementRef, i: number) => {
        const capitalsMatch = selectedOption.capital === this.currentQuestion.capital;
        if (capitalsMatch && index === i) {
          this.correctQuestions++;
          this.highlightCorrectAnswer(answer, true);
        } else if (!capitalsMatch && index === i) {
          this.highlightWrongAnswer(answer);
          this.highlightCorrectAnswer();
        } else {
          this.deactivateAnswer(answer);
        }
      });
      setTimeout(() => {
        this.nextQuestion();
      }, 1500);
    }
  }

  tryAgain(): void {
    this.tryAgainEmitter.emit();
  }

  private nextQuestion(): void {
    this.areAnswersBlocked = false;
    if (this.currentQuestionIndex < 10) {
      this.currentQuestionIndex++;
      const { questions } = this.gameQuestions[this.currentQuestionIndex];
      this.currentQuestion = questions[0];
    }
  }

  /**
   * Highlights an element with green by changing the className of the element.
   * Receives two inputs. If no element is provided, then the correct answer is automatically searched
   *
   * @param element ElementRef to change
   * @param isAnimated If true, the element is animated with a blink. if false the element is only highlighted.
   */
  private highlightCorrectAnswer(element?: ElementRef, isAnimated?: boolean): void {
    const withAnimation = isAnimated ? 'animate' : '';
    if (!element) {
      const correctQuestionIndex = this.findCorrectAnswer();
      element = this.answers.find((el: ElementRef, index: number) => {
        return index === correctQuestionIndex;
      });
    }
    element.nativeElement.className = `answer correct ${withAnimation}`;
  }

  /**
   * Highlights an element with red by changing the className of the element.
   *
   * @param element ElementRef to change
   */
  private highlightWrongAnswer(element: ElementRef): void {
    element.nativeElement.className = 'answer wrong animate';
  }

  /**
   * Highlights an element with red by changing the className of the element.
   *
   * @param element ElementRef to change
   */
  private deactivateAnswer(element: ElementRef): void {
    element.nativeElement.className = 'answer deactivated';
  }

  /**
   * Starts the game by creating an array with 10 groups of 4 countries.
   * Also sets the first question
   */
  private startGame(): void {
    for (let i = 0; i <= 10; i++) {
      this.gameQuestions.push(this.prepareQuestions());
    }
    const { questions } = this.gameQuestions[this.currentQuestionIndex];
    this.currentQuestion = questions[0];
  }

  /**
   * Randomly retrieves a set of 4 possible countries
   */
  private prepareQuestions(): ISingleQuestion {
    let filled = false;
    const countryQuestions: Array<ICountry> = [];
    while (!filled) {
      const randomCountry = this.countries[
        Math.floor(Math.random() * this.countries.length)
      ];

      if (!this.isDuplicateCountry(countryQuestions, randomCountry) && randomCountry.capital) {
        countryQuestions.push(randomCountry);
      }

      if (countryQuestions.length === 4) {
        filled = true;
      }
    }

    return { questions: this.shuffle(countryQuestions) };
  }

  /**
   * Checks if the country already exists in a given array
   * @param questions Array of ICountry
   * @param country Country to check
   */
  private isDuplicateCountry(
    questions: Array<ICountry>,
    country: ICountry
  ): boolean {
    const filteredQuestions = [...questions];
    return !!filteredQuestions.find(
      (question) => question.name === country.name
    );
  }


  /**
   * Finds the index of the correct answer in a set of 4 possible ansers
   */
  private findCorrectAnswer(): number {
    const answers: ISingleQuestion = this.gameQuestions[this.currentQuestionIndex];
    return answers.questions.findIndex((answer: ICountry) => {
      return answer.capital === this.currentQuestion.capital;
    });
  }

  shuffle(questions: Array<ICountry>): Array<ICountry> {
    let currentIndex = questions.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = questions[currentIndex];
      questions[currentIndex] = questions[randomIndex];
      questions[randomIndex] = temporaryValue;
    }

    return questions;
  }
}
