import { Map, Seq } from 'immutable';

/**
 * Filters students with score >= 70 and logs their names with the first letter capitalized.
 * @param {Object} grades - The object containing student information
 */
export function printBestStudents(grades) {
    // Use seq to create a sequence from the grades object
    Seq(grades)
        // Filter students with score >= 70
        .filter(student => student.score >= 70)
        // For each student, capitalize the first letter of their first and last name
        .forEach(student => {
            const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
            const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
            console.log(`${firstName} ${lastName}`);
        });
}
