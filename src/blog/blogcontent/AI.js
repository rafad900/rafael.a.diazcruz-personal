const AI = {
  "id": "ai-applications-math",
  "title": "Exploring the Landscape of Artificial Intelligence and Its Applications",
  "slug": "artificial-intelligence-applications-math",
  "authors": [
    { "name": "Your Name", "avatar": "https://example.com/your-avatar.jpg" }
  ],
  "img": "https://picsum.photos/800/450?random=5",
  "tag": "Artificial Intelligence",
  "description": "An overview of Artificial Intelligence, its diverse applications, and a look into the mathematical foundations of neural networks, including weights, activation functions, and the transformer architecture.",
  "published_date": "2024-07-30T14:30:00Z",
  "content_blocks": [
    {
      "id": "intro",
      "type": "paragraph",
      "data": {
        "text": "Artificial Intelligence (AI) has transitioned from a theoretical concept to a pervasive technology impacting numerous aspects of our lives. From powering recommendation systems and virtual assistants to driving advancements in healthcare and autonomous vehicles, AI's influence is undeniable. This post aims to provide a general overview of some key applications of AI and delve into the mathematical underpinnings of certain fundamental concepts within neural networks, which form the basis of many modern AI systems."
      }
    },
    {
      "id": "applications",
      "type": "heading",
      "data": {
        "level": 3,
        "text": "Diverse Applications of Artificial Intelligence"
      }
    },
    {
      "id": "applications-paragraph",
      "type": "paragraph",
      "data": {
        "text": "The breadth of AI applications is remarkable. In healthcare, AI algorithms are being used for medical image analysis, drug discovery, and personalized treatment plans. The financial sector employs AI for fraud detection, algorithmic trading, and risk assessment. Natural Language Processing (NLP), a subfield of AI, powers machine translation, sentiment analysis, and chatbots that enhance customer service. In manufacturing, AI-driven robots and predictive maintenance systems improve efficiency and reduce downtime. Transportation benefits from AI through autonomous driving technologies and optimized logistics. These are just a few examples illustrating the transformative potential of AI across various industries."
      }
    },
    {
      "id": "neural-networks-math",
      "type": "heading",
      "data": {
        "level": 3,
        "text": "Mathematical Foundations: Neural Networks"
      }
    },
    {
      "id": "weights",
      "type": "heading",
      "data": {
        "level": 4,
        "text": "Weights in Neural Networks"
      }
    },
    {
      "id": "weights-paragraph",
      "type": "paragraph",
      "data": {
        "text": "At the core of most neural networks are interconnected nodes (neurons) organized in layers. The connections between these neurons are associated with numerical values called weights. These weights determine the strength and influence of the signal passing from one neuron to another. Mathematically, if we consider a neuron in a layer receiving inputs from the previous layer, each input is multiplied by its corresponding weight. These weighted inputs are then summed together."
      }
    },
    {
      id: "latex-example",
      type: "latex",
      data: {
        formula: "f(x_{in}) =  w*x_{in} = y_{out}",
        displayMode: true,
        caption: "Single input with single output"
      }
    },
    {
      id: "latex-example-2",
      type: "latex",
      data: {
        formula: "f(x_{1}, x_{2}, ..., x_{n}) =  w_{1}*x_{1} + w_{2}*x_{2} + ... + w_{n}*x_{n} = y_{out}",
        displayMode: true,
        caption: "Many input with single output"
      }
    },
    {
      id: "latex-example-2",
      type: "latex",
      data: {
        formula: "f(X) =  \\sum_{i=1}^{n} w_{i}*x_{i} = y_{out}",
        displayMode: true,
        caption: "Many input with single output"
      }
    },
    {
      "id": "activation-functions",
      "type": "heading",
      "data": {
        "level": 4,
        "text": "Activation Functions"
      }
    },
    {
      "id": "activation-paragraph",
      "type": "paragraph",
      "data": {
        "text": "Following the weighted sum of inputs, a non-linear function, known as the activation function, is applied. This non-linearity is crucial as it allows the neural network to learn complex relationships in the data. Common activation functions include the sigmoid function, the hyperbolic tangent (tanh) function, and the Rectified Linear Unit (ReLU) function. The output of the activation function becomes the input to the neurons in the subsequent layer."
      }
    },
    {
      id: "activation-example",
      type: "latex",
      data: {
        formula: "\\sigma(z) = \\frac{1}{1 + e^{-z}}",
        displayMode: true,
        caption: "Sigmoid activation function"
      }
    },
    {
      id: "activation-example-1",
      type: "latex",
      data: {
        formula: "\\tanh(z) = \\frac{e^{z} - e^{-z}}{e^{z} + e^{-z}}",
        displayMode: true,
        caption: "Hyperbolic tangent activation function"
      }
    },
    {
      id: "activation-example-2",
      type: "latex",
      data: {
        formula: "ReLU(z) = \\max(0, z)",
        displayMode: true,
        caption: "ReLU activation function"
      }
    },
    {
      "id": "neural-networks-math",
      "type": "heading",
      "data": {
        "level": 3,
        "text": "Making a chain of neural networks"
      }
    },
    {
      id: "chain-paragraph",
      type: "paragraph",
      data: {
        text: "Nothing comes about when these functions are used individually. Their true power comes their combined use.",
      },
    },
  ]
}

export default AI;