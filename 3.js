function attack(damage){
    return damage - 2
}

function damageCalculation(numberOfAttack, demagePerAttack) {

    return numberOfAttack * attack(demagePerAttack)
}