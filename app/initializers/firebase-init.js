
export function initialize(application) {
  application.inject('route','firebase','service:firebase');

}

export default {
  initialize,
};
