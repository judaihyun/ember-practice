import Helper from '@ember/component/helper';

export default class Substring extends Helper{

	compute([string], { start, end }){
		return string.substring(start || 0, end);
	}
}
