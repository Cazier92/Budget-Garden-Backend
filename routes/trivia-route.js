import { Router } from 'express'
import * as triviaCtrl from '../controllers/trivia-controller.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', triviaCtrl.index)
router.get('/:id', triviaCtrl.show)


/*---------- Protected Routes ----------*/

export { router }
