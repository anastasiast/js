'use strict';

function User(name, lastname, technologyStack) {
    this.name = name;
    this.lastname = lastname;
    this.technologyStack = technologyStack;

    this.getAge = () => {
        let yearBirth = Number(prompt('Введите ваш год рождения:', 1992));
        let currentYear = new Date().getFullYear();

        this.age = Number(currentYear)- Number(yearBirth);

        return `Возраст пользователя ${this.name}: ${this.age}`
    }

    this.fullName = () => {
        return `${this.name} ${this.lastname}`;
    }

    this.getTechnologyStack = () => {
        return `Стек технологий пользователя ${this.technologyStack}`
    }

    this.isGetTechnologyInStack = (technology) => {
        return this.technologyStack.toUpperCase().indexOf(technology.toUpperCase()) > -1 ?
            `Пользователь владеет технологией ${technology}` :
            `Пользователь не владеет технологией ${technology}`
    }
}

const user = new User('Анастасия', 'Евтушенко', 'JS, HTML, CSS, LESS');

alert(user.getAge());
alert(user.fullName());
alert(user.getTechnologyStack());
alert(user.isGetTechnologyInStack('JS'));
