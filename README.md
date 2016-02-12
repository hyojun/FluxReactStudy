# Javascript Study for Flux, React.js

## Setting
0. XCode
1. Node.js : https://nodejs.org/en/
 * bower
  `sudo npm install -g bower`
 * esLint
  `sudo npm install -g eslint`
2. Sublime Text3 : http://www.sublimetext.com/3
 * Package Control : https://packagecontrol.io/installation
 * SublimeCodeIntel
 * BracketHighlighter
 * SublimeLinter
 * SublimeLinter-eslint
3. Project setting
 * `npm install`
4. Build commands
 * `npm run build`
 * `npm run start`
 * `npm run test`

## Naming Convention
- 클래스 내부적으로 사용하는 변수와 함수는(자바에서 private) 앞에 `_`를 붙인다 (e.g. _onSave)
- **클래스와 오브젝트를 구분** 
	- 클래스는 자바컨벤션 그대로 따름 (e.g. MotionEvent)
	- 오브젝트는 앞에 `o`를 붙인다 (e.g. oMotionEvent)
- **변수 네이밍 컨벤션**
	- String : 앞에 `s`를 붙인다 (e.g. sVariable)
	- Number : 앞에 `n`을 붙인다 (e.g. nVariable)
	- Boolean : 앞에 `b`를 붙인다 (e.g. bVariable)
	- Object : 앞에 `o`를 붙인다 (e.g. oVariable)
	- Array : 앞에 `a`를 붙인다 (e.g. aVariable)
