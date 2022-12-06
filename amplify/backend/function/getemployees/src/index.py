import json
import os

TABLE_NAME = os.getenv('STORAGE_JMEMPLOYEES_NAME')

def handler(event, context):
  print('received event:')
  print(event)
  print('Table: %s' % TABLE_NAME)

  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }
