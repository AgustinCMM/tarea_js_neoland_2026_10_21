"use strict";

const STORAGE_KEY = "logica-js-estados";
let exerciseStates = {};

try {
  exerciseStates = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
} catch {
  exerciseStates = {};
}

function renderExerciseStatus(number) {
  const isResolved = exerciseStates[number] === true;
  const labels = document.querySelectorAll(`[data-status-for="${number}"], [data-exercise-status="${number}"]`);

  labels.forEach((label) => {
    label.textContent = isResolved ? "Resuelto" : "Pendiente";
    label.classList.toggle("status--resolved", isResolved);
  });

  const toggle = document.querySelector(`[data-status-toggle="${number}"]`);
  if (toggle) {
    toggle.textContent = isResolved ? "Marcar como pendiente" : "Marcar como resuelto";
    toggle.setAttribute("aria-pressed", String(isResolved));
  }
}

document.querySelectorAll("[data-status-for]").forEach((label) => {
  renderExerciseStatus(label.dataset.statusFor);
});

const exerciseNumber = document.body.dataset.exerciseNumber;
if (exerciseNumber) {
  renderExerciseStatus(exerciseNumber);
  const toggle = document.querySelector(`[data-status-toggle="${exerciseNumber}"]`);

  if (toggle) {
    toggle.addEventListener("click", () => {
      exerciseStates[exerciseNumber] = exerciseStates[exerciseNumber] !== true;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(exerciseStates));
      } catch {
        // El estado sigue actualizado en esta página aunque el almacenamiento no esté disponible.
      }
      renderExerciseStatus(exerciseNumber);
    });
  }
}
