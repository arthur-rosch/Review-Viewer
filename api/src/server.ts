import { z } from 'zod'
import cors from 'cors'
import axios from 'axios'
import express from 'express'

const port = 3001
const app = express()
const baseUrl = 'https://shopee.com.br/api/v2'

app.use(cors())
app.use(express.json())

app.get('/api/get_ratings/:itemId/:shopeId', async (req, res) => {
  const GetRatingsBodySchema = z.object({
    itemId: z.string(),
    shopeId: z.string(),
  })

  const { itemId, shopeId } = GetRatingsBodySchema.parse(req.params)

  const apiUrlRatingShope = `${baseUrl}/item/get_ratings?exclude_filter=0&filter=0&filter_size=0&flag=1&fold_filter=0&itemid=${itemId}&limit=6&offset=0&relevant_reviews=false&request_source=1&shopid=${shopeId}&tag_filter=&type=0&variation_filters=`

  try {
    const response = await axios.get(apiUrlRatingShope)

    res.status(response.status).json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer a chamada à API da Shopee' })
  }
})

app.listen(port, () => {
  console.log(`Servidor intermediário rodando na porta ${port}`)
})
