/**
 * Generated by Clara Agent Studio
 * Flow: Simple Text Processor
 * Description: A simple flow that processes text input with custom logic
 * Generated at: 2024-01-15T10:30:00.000Z
 */

import { ClaraFlowRunner } from 'clara-flow-sdk';

export class SimpleTextProcessorFlow {
  constructor(options = {}) {
    this.runner = new ClaraFlowRunner({
      enableLogging: true,
      logLevel: 'info',
      ...options
    });
    
    this.flowData = {
        "format": "clara-sdk",
        "version": "1.0.0",
        "flow": {
            "id": "flow-text-processor-1642247400000",
            "name": "Simple Text Processor",
            "description": "A simple flow that processes text input with custom logic",
            "nodes": [
                {
                    "id": "input-1",
                    "type": "input",
                    "data": {
                        "label": "Text Input",
                        "inputType": "string",
                        "defaultValue": ""
                    },
                    "position": {
                        "x": 100,
                        "y": 100
                    }
                },
                {
                    "id": "custom-processor-1",
                    "type": "text-cleaner",
                    "data": {
                        "properties": {
                            "removeSpaces": true,
                            "toLowerCase": true
                        }
                    },
                    "position": {
                        "x": 400,
                        "y": 100
                    }
                },
                {
                    "id": "llm-1",
                    "type": "llm",
                    "data": {
                        "systemPrompt": "You are a helpful assistant that summarizes text.",
                        "prompt": "Please summarize the following text: {{input}}",
                        "model": "gpt-3.5-turbo",
                        "temperature": 0.7,
                        "maxTokens": 150
                    },
                    "position": {
                        "x": 700,
                        "y": 100
                    }
                },
                {
                    "id": "output-1",
                    "type": "output",
                    "data": {
                        "label": "Processed Result"
                    },
                    "position": {
                        "x": 1000,
                        "y": 100
                    }
                }
            ],
            "connections": [
                {
                    "id": "conn-1",
                    "sourceNodeId": "input-1",
                    "sourcePortId": "output",
                    "targetNodeId": "custom-processor-1",
                    "targetPortId": "input"
                },
                {
                    "id": "conn-2",
                    "sourceNodeId": "custom-processor-1",
                    "sourcePortId": "output",
                    "targetNodeId": "llm-1",
                    "targetPortId": "input"
                },
                {
                    "id": "conn-3",
                    "sourceNodeId": "llm-1",
                    "sourcePortId": "output",
                    "targetNodeId": "output-1",
                    "targetPortId": "input"
                }
            ],
            "metadata": {
                "createdAt": "2024-01-15T10:00:00.000Z",
                "updatedAt": "2024-01-15T10:30:00.000Z"
            }
        },
        "customNodes": [
            {
                "id": "text-cleaner-node",
                "type": "text-cleaner",
                "name": "Text Cleaner",
                "description": "Cleans and processes text input",
                "category": "Text Processing",
                "icon": "🧹",
                "inputs": [
                    {
                        "id": "input",
                        "type": "string",
                        "label": "Text Input"
                    }
                ],
                "outputs": [
                    {
                        "id": "output",
                        "type": "string",
                        "label": "Cleaned Text"
                    }
                ],
                "properties": [
                    {
                        "id": "removeSpaces",
                        "type": "boolean",
                        "label": "Remove Extra Spaces",
                        "defaultValue": true
                    },
                    {
                        "id": "toLowerCase",
                        "type": "boolean",
                        "label": "Convert to Lowercase",
                        "defaultValue": false
                    }
                ],
                "executionCode": `async function execute(inputs, properties, context) {
  let text = inputs.input || '';
  
  context.log('Processing text:', text.substring(0, 50) + '...');
  
  // Remove extra spaces if enabled
  if (properties.removeSpaces) {
    text = text.replace(/\\s+/g, ' ').trim();
    context.log('Removed extra spaces');
  }
  
  // Convert to lowercase if enabled
  if (properties.toLowerCase) {
    text = text.toLowerCase();
    context.log('Converted to lowercase');
  }
  
  // Remove special characters
  text = text.replace(/[^a-zA-Z0-9\\s]/g, '');
  
  context.log('Cleaned text length:', text.length);
  
  return {
    output: text
  };
}`,
                "metadata": {
                    "author": "Clara Studio",
                    "version": "1.0.0",
                    "tags": ["text", "processing", "cleaning"]
                }
            }
        ],
        "exportedAt": "2024-01-15T10:30:00.000Z",
        "exportedBy": "Clara Agent Studio"
    };
    
    // Register custom nodes
    this.registerCustomNodes();
  }

  // Custom node: Text Cleaner
  registerTextCleanerNode() {
    const nodeDefinition = {
      id: 'text-cleaner-node',
      type: 'text-cleaner',
      name: 'Text Cleaner',
      description: 'Cleans and processes text input',
      category: 'Text Processing',
      icon: '🧹',
      inputs: [
            {
                "id": "input",
                "type": "string",
                "label": "Text Input"
            }
      ],
      outputs: [
            {
                "id": "output",
                "type": "string",
                "label": "Cleaned Text"
            }
      ],
      properties: [
            {
                "id": "removeSpaces",
                "type": "boolean",
                "label": "Remove Extra Spaces",
                "defaultValue": true
            },
            {
                "id": "toLowerCase",
                "type": "boolean",
                "label": "Convert to Lowercase",
                "defaultValue": false
            }
      ],
      executionCode: `async function execute(inputs, properties, context) {
  let text = inputs.input || '';
  
  context.log('Processing text:', text.substring(0, 50) + '...');
  
  // Remove extra spaces if enabled
  if (properties.removeSpaces) {
    text = text.replace(/\\s+/g, ' ').trim();
    context.log('Removed extra spaces');
  }
  
  // Convert to lowercase if enabled
  if (properties.toLowerCase) {
    text = text.toLowerCase();
    context.log('Converted to lowercase');
  }
  
  // Remove special characters
  text = text.replace(/[^a-zA-Z0-9\\s]/g, '');
  
  context.log('Cleaned text length:', text.length);
  
  return {
    output: text
  };
}`,
      metadata: {
            "author": "Clara Studio",
            "version": "1.0.0",
            "tags": [
                "text",
                "processing",
                "cleaning"
            ]
      }
    };

    return this.runner.registerCustomNode(nodeDefinition);
  }

  async registerCustomNodes() {
    await this.registerTextCleanerNode();
  }

  /**
   * Execute the flow with the provided inputs
   * @param {Object} inputs - Input data for the flow
   * @returns {Promise<Object>} - Flow execution results
   */
  async execute(inputs = {}) {
    // Map inputs to flow nodes
    const flowInputs = {
      'input-1': inputs.text_input !== undefined ? inputs.text_input : inputs['Text Input']
    };

    // Execute the flow
    const result = await this.runner.executeFlow(this.flowData, flowInputs);
    
    return result;
  }

  /**
   * Execute the flow with a callback for each node completion
   * @param {Object} inputs - Input data for the flow
   * @param {Function} onNodeComplete - Callback function called when each node completes
   * @returns {Promise<Object>} - Flow execution results
   */
  async executeWithCallback(inputs = {}, onNodeComplete) {
    const flowInputs = {
      'input-1': inputs.text_input !== undefined ? inputs.text_input : inputs['Text Input']
    };

    // Setup callback monitoring
    const originalExecuteNode = this.runner.executeNode;
    this.runner.executeNode = async (nodeData, nodeInputs) => {
      const result = await originalExecuteNode.call(this.runner, nodeData, nodeInputs);
      if (onNodeComplete) {
        onNodeComplete(nodeData.id, result);
      }
      return result;
    };

    try {
      const result = await this.runner.executeFlow(this.flowData, flowInputs);
      return result;
    } finally {
      // Restore original method
      this.runner.executeNode = originalExecuteNode;
    }
  }

  /**
   * Execute the flow with multiple input sets (batch processing)
   * @param {Array<Object>} inputSets - Array of input data objects
   * @param {Object} options - Batch processing options
   * @returns {Promise<Array<Object>>} - Array of flow execution results
   */
  async executeBatch(inputSets, options = {}) {
    const { 
      concurrency = 1, 
      continueOnError = false,
      progressCallback = null 
    } = options;

    const results = [];
    const errors = [];
    
    if (concurrency === 1) {
      // Sequential processing
      for (let i = 0; i < inputSets.length; i++) {
        try {
          const result = await this.execute(inputSets[i]);
          results.push({ index: i, success: true, result });
          if (progressCallback) {
            progressCallback(i + 1, inputSets.length, result);
          }
        } catch (error) {
          const errorResult = { index: i, success: false, error: error.message };
          errors.push(errorResult);
          results.push(errorResult);
          
          if (!continueOnError) {
            throw new Error(`Batch processing failed at index ${i}: ${error.message}`);
          }
          
          if (progressCallback) {
            progressCallback(i + 1, inputSets.length, null, error);
          }
        }
      }
    } else {
      // Parallel processing with concurrency limit
      const chunks = [];
      for (let i = 0; i < inputSets.length; i += concurrency) {
        chunks.push(inputSets.slice(i, i + concurrency));
      }

      let processedCount = 0;
      for (const chunk of chunks) {
        const chunkPromises = chunk.map(async (inputs, chunkIndex) => {
          const globalIndex = processedCount + chunkIndex;
          try {
            const result = await this.execute(inputs);
            return { index: globalIndex, success: true, result };
          } catch (error) {
            return { index: globalIndex, success: false, error: error.message };
          }
        });

        const chunkResults = await Promise.all(chunkPromises);
        results.push(...chunkResults);
        
        processedCount += chunk.length;
        
        if (progressCallback) {
          chunkResults.forEach((result, index) => {
            if (result.success) {
              progressCallback(result.index + 1, inputSets.length, result.result);
            } else {
              progressCallback(result.index + 1, inputSets.length, null, new Error(result.error));
            }
          });
        }

        // Check for errors if not continuing on error
        if (!continueOnError) {
          const chunkErrors = chunkResults.filter(r => !r.success);
          if (chunkErrors.length > 0) {
            throw new Error(`Batch processing failed at indices: ${chunkErrors.map(e => e.index).join(', ')}`);
          }
        }
      }
    }

    return results;
  }

  // Utility methods
  validateFlow() {
    return this.runner.validateFlow(this.flowData);
  }

  getExecutionLogs() {
    return this.runner.getExecutionLogs();
  }

  clearLogs() {
    this.runner.clearLogs();
  }

  getStats() {
    return this.runner.getStats();
  }

  dispose() {
    this.runner.dispose();
  }
}

// Export instance for direct use
export const simpleTextProcessorFlow = new SimpleTextProcessorFlow();

// Export default for easier importing
export default SimpleTextProcessorFlow;

/**
 * Usage Examples:
 * 
 * // Basic usage with default instance
 * import { simpleTextProcessorFlow } from './generated-flow-example.js';
 * 
 * const result = await simpleTextProcessorFlow.execute({
 *   text_input: "This is some text that needs processing!"
 * });
 * console.log(result);
 * 
 * // Custom instance with options
 * import SimpleTextProcessorFlow from './generated-flow-example.js';
 * 
 * const flow = new SimpleTextProcessorFlow({
 *   enableLogging: false,
 *   timeout: 30000
 * });
 * 
 * const result = await flow.execute({ 
 *   text_input: "Hello World" 
 * });
 * 
 * // Batch processing
 * const inputs = [
 *   { text_input: "First text to process" },
 *   { text_input: "Second text to process" },
 *   { text_input: "Third text to process" }
 * ];
 * 
 * const results = await flow.executeBatch(inputs, {
 *   concurrency: 2,
 *   continueOnError: true,
 *   progressCallback: (completed, total, result, error) => {
 *     console.log(`Progress: ${completed}/${total}`);
 *     if (error) {
 *       console.error('Error:', error.message);
 *     } else {
 *       console.log('Result:', result);
 *     }
 *   }
 * });
 * 
 * // Stream processing
 * await flow.executeWithCallback(
 *   { text_input: "Stream input" },
 *   (nodeId, result) => {
 *     console.log(`Node ${nodeId} completed:`, result);
 *   }
 * );
 */ 