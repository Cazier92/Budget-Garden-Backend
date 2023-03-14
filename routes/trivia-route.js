import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivia-controller.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.get('/trivia', triviaCtrl.index)

export { router }
