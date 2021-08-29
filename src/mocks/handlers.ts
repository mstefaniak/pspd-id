import { rest } from 'msw'

const BASE_URL = 'https://crm-test.pspd.org.pl/api'

export const handlers = [
  rest.post(`${BASE_URL}/user/token`, (_, res, ctx) => {
    return res(
      ctx.json({ token: 'lKY1uE9i5yg_tcnpeDkD3CKRAiQLOJo0H5LVClYkAOI' })
    )
  }),

  rest.post(`${BASE_URL}/user/login`, (_, res, ctx) => {
    return res(
      ctx.json({
        sessid: 'n7TOG5g_qKV8QqblBkQHEVXUX68G2X63XI-ZQ2zqEK8',
        session_name: 'SSESSd63cb4d49214df3f311ce4d7b3481ff9',
        token: 'vVfONqPK_rle9rBNZV81bK2kX6MpDzjXYq2DJBmS2Pg',
        user: {
          uid: '178',
          name: 'jan.testowski@gmail.com',
          mail: 'jan.testowski@gmail.com',
        }
      })
    )
  }),

  rest.get(`${BASE_URL}/data/userdata`, (_, res, ctx) => {
    return res(
      ctx.json([{
        name: 'jan.testowski@gmail.com',
        email: 'jan.testowski@gmail.com',
        joinDate: '1295391600',
        status: 'Current',
        id: '79',
        ot: 'Zachodniopomorski Oddzia\u0142 Terenowy',
        firstName: 'Jan',
        lastName: 'Testowski'
      }])
    )
  })
]