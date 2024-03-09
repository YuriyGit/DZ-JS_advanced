'use strict'

function ageVerification(dateOfBirth) {
    const dateBirth = new Date(dateOfBirth);
    const now = new Date();
    const fullYear = (now.getFullYear() - dateBirth.getFullYear());
    const fullMonth = (now.getMonth()  - dateBirth.getMonth() );
    const fullDate = (now.getDate() - dateBirth.getDate());

    if (fullYear > 14) return true;
    if (fullYear === 14 && fullMonth > 0) return true;
    if (fullMonth === 0 && fullDate >= 0) return true;

    return false;
}
