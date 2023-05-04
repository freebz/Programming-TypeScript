// 10.2.2 CommonJS와 AMD 코드 사용하기

import {something} from './a/legacy/commonjs/module'


import * as fs from 'fs'
fs.readFile('some/file.txt')


import fs from 'fs'
fs.readFile('some/file.txt')
